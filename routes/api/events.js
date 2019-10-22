const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Schedule = require("../../models/Schedule");
const Pack = require("../../models/Pack");
const Event = require('../../models/Event')

router.get("/test", (req, res) => res.json({msg: "This is the events route"}));

//helper function
const parseURL = baseUrl => {
  let urlArr = baseUrl.split("/");

  return [urlArr[3], urlArr[5]]
};

router.get("/", (req, res) => {
  Event.find({ _id: req.body.id })
    .then(event => res.json(event))
    .catch(err => res.status(404).json({ noeventfound: 'No event found' }));
})

router.get("/:eventId", (req, res) => {
  Event.find({ _id: req.body.id })
    .then(event => res.json(event))
    .catch(err => res.status(404).json({ noeventfound: 'No event found' }));
})

router.post("/", (req, res) => {
  const newEvent = new Event({
    title: req.body.title,
    description: req.body.description,
    address: req.body.address,
    cost: req.body.cost,
    // time: req.body.time
  })
  
  const [packId, scheduleId] = parseURL(req.baseUrl);
  Pack.updateOne(
    { _id: packId, "schedules._id": scheduleId },
    { $push: {"schedules.$.events": newEvent }}
  ).then(() => res.json({newEvent, scheduleId}));
});

router.put("/:eventId", (req, res) => {
  // let packId = parseUrlPack(req.baseUrl)
  // let scheduleId = parseUrlSchedule(req.baseUrl)
  const [packId, scheduleId] = parseURL(req.baseUrl);
  const eventId = req.params.eventId
  console.log(packId, scheduleId, eventId)
  console.log("------")
  console.log(req.body)

  Pack.findOneAndUpdate(
    { _id: packId, "schedules._id": scheduleId, "events._id": eventId },
    { $set: {"events.$.title": req.body.title, 
            "events.$.description": req.body.description,
            "events.$.address": req.body.address,
            "events.$.cost": req.body.cost
    }}).then(() => {
      // Pack.find({"schedules.events._id": eventId})
      //   .then(asdf => res.json(asdf))
      // });
      Pack.find({_id: packId, "schedules._id": scheduleId, "schedules.events._id": eventId},
        {"schedules.0.events.$": 1})
        .then(event => res.json(event))
        .catch(err => res.json(err))
      });
  });

router.delete("/:eventId", (req, res) => {
  const [packId, scheduleId] = parseURL(req.baseUrl);
  const eventId = req.params.eventId
  // console.log(packId)
  // console.log(scheduleId)
  // console.log(eventId)
  Pack.updateOne(
    { _id: packId, "schedules._id": scheduleId },
    { $pull: { "schedules.$.events": {_id: eventId}} }
  ).then(() => res.json({eventId, scheduleId}))
});

module.exports = router;