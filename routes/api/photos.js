const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Photo = require('../../models/Photo');

router.post("/uploadphoto", (req, res) => {
  console.log("hi");
  // console.log(req);
  console.log(req.body);
  console.log(req.body.title);
  console.log(req.body.photo);

  // const newPhoto = new Photo({
  //   title: req.body.title,
  //   // author_id: req.body.author_id,
  //   attachedPhoto: req.body.attachedPhoto
  //   // startDate: req.body.date,
  //   // endDate: req.body.date
  // })
  // newPhoto.save().then(photo => res.json(photo))
  // .catch(err => console.log(err));
})

module.exports = router;
