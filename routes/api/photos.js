const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Photo = require('../../models/Photo');
const Pack = require('../../models/Pack');
const keys = require('../../config/keys');
const multer = require("multer");
var AWS = require("aws-sdk");

router.get("/test", (req, res) => res.json({ msg: "This is the photo route" }));

const parseURL = (baseUrl) => {
  let urlArr = baseUrl.split('/');
  return urlArr[3];
}

router.get("/all", (req, res) => {

  let packId = parseURL(req.baseUrl);

  Pack.findOne({ _id: packId})
        .then(pack => res.json(pack.photos))
        .catch(err => res.status(404).json({ nophotofound: 'Photos not found' }));
});

router.get(`/:photoId`, (req, res) => {
  // Photo.find({ _id: req.body.id })
  //     .then(photo => res.json(photo))
  //     .catch(err => res.status(404).json({ nophotofound: 'No photo found' }));
  let packId = parseURL(req.baseUrl);
  Pack.find({_id: packId, "photos._id": req.params.photoId},
  { "photos.$": 1})
    .then(photo => res.json(photo))
    .catch(err =>
      res
        .status(404)
        .json({ nophotofound: "No photo found with that id" })
    );
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

// router.delete(`/:photoId`, (req, res) => {
//   let packId = parseURL(req.baseUrl);
//   Pack.updateOne(
//     { _id: packId },
//     { $pull: { photos: {_id: req.params.photoId}} }
//   )
//   .then((pls) => res.json(pls));
  // let foundPhoto = Pack.find({ _id: packId, "photos._id": req.params.photoId}, 
  //   { "photos.$": 1})
  //     .then(photo => res.json(photo))
  //     .catch(err =>
  //       res
  //         .status(404)
  //         .json({ nophotofound: "No photo found with that id"})
  // );

  // res.json({ msg: "INSIDE PHOTO DELETE" });
  // res.json({ msg: foundPhoto });

  // let s3bucket = new AWS.S3({
  //   accessKeyId: keys.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
  //   region: keys.AWS_REGION
  // });

  // let params = {
  //   Bucket: keys.AWS_BUCKET_NAME,
  //   Key: foundPhoto.title
  // };

  // s3bucket.deleteObject(params, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send({
  //       status: "200",
  //       responseType: "string",
  //       response: "success"
  //     });
  //   }
  // });

// });

router.delete("/:photoId", (req, res) => {
  let packId = parseURL(req.baseUrl);
  Pack.updateOne(
    { _id: packId },
    { $pull: { photos: {_id: req.params.photoId}} }
  ).then(() => res.json(req.params.photoId));
})   

module.exports = router;
