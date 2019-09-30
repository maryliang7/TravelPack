const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Photo = require('../../models/Photo');
const Pack = require('../../models/Pack');
const keys = require('../../config/keys');

router.get("/test", (req, res) => res.json({ msg: "This is the photo route" }));

const parseURL = (baseUrl) => {
  let urlArr = baseUrl.split('/');
  return urlArr[3];
}

router.get("/all", (req, res) => {
  res.json({ msg: "here" })
  
  Pack.find({ _id : req }).then( targetPack => targetPack.find())
  // Photo.find().then( photos => res.json( photos));
});

router.get('/:photoId', (req, res) => {
  Photo.find({ _id: req.body.id })
      .then(photo => res.json(photo))
      .catch(err => res.status(404).json({ nophotofound: 'No photo found' }));
});

router.post("/new", (req, res) => {

  const s3FileURL = keys.AWS_Uploaded_File_URL_LINK;

  const newPhoto = new Photo({
    title: req.body.title,
    attachedPhoto: s3FileURL + req.body.title,
    packId: req.body.packId,
  })

  let parsed = parseURL(req.baseUrl);
  console.log(parsed);
  Pack.updateOne(
      {_id: parsed},
      { $push: {photos: newPhoto }}
  ).then(() => res.json(newPhoto));
});

module.exports = router;
