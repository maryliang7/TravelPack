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

// router.get("/all", (req, res) => {
//   debugger
//   console.log("PAAACK ID");
//   let packId = parseURL(req.baseUrl);
//   console.log(packId);
//   Pack.findOne({ _id: packId})
//         .then(pack => res.json(pack.photos))
//         .catch(err => res.status(404).json({ nophotofound: 'Photos not found' }));
// });

router.get("/all", (req, res) => {
  res.json({ msg: "here" })
  
  Pack.find({ _id : req }).then( targetPack => targetPack.find())
  // Photo.find().then( photos => res.json( photos));
});

router.get(`/:photoId`, (req, res) => {
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
  // console.log(parsed);
  Pack.updateOne(
      {_id: parsed},
      { $push: {photos: newPhoto }}
  ).then(() => res.json(newPhoto));
});

router.delete(`/:photoId`, (req, res) => {
  let packId = parseURL(req.baseUrl);
  Pack.updateOne(
    { _id: packId },
    { $pull: { photos: {_id: req.params.photoId}} }
  ).then((pls) => res.json(pls));
});

module.exports = router;
