const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Photo = require('../../models/Photo');

const parseURL = (baseUrl) => {
  let urlArr = baseUrl.split('/');
  return urlArr[3];
}

router.get("/all", (req, res) => {
  Photo.find().then( photos => res.json(photos));
});

router.post("/new", (req, res) => {
  const s3FileURL = keys.AWS_Uploaded_File_URL_LINK;
  const file = req.photoFile;

  console.log("NEW PHOTO");
  console.log(req);

  const newPhoto = new Photo({
    title: req.body.title,
    attachedPhoto: s3FileURL + file.originalname
  })

  let parsed = parseURL(req.baseUrl);

  Photo.updateOne(
      {_id: parsed},
      { $push: {photos: req }}
  ).then(() => res.json(req));
})

module.exports = router;
