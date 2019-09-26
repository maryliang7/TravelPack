const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pack = require('../../models/Photo');

router.post("/upload", (req, res) => {
  const newPhoto = new Photo({
    title: req.body.title,
    author_id: req.body.author_id,
    startDate: req.body.date,
    endDate: req.body.date
  })
  newPhoto.save();
})

module.exports = router;
