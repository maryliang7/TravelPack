const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Schedule = require("../../models/Schedule");
const Pack = require("../../models/Pack");
const Event = require('../../models/Event')

router.get("/test", (req, res) => res.json({msg: "This is the events route"}));

//WRITE FUNCTIONS TO GET PACKID AND SCHEDULEID

//

router.get("/:eventId", (req, res) => {
    Event.find({ _id: req.body.id })
        .then(event => res.json(event))
        .catch(err => res.status(404).json({ noeventfound: 'No event found' }));
})

router.post("/new", (req, res) => {
    const newEvent = new Event({
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
        cost: req.body.cost,
        time: req.body.time
    })

    //Need to parse for packId and then scheduleId...
    //api/packs/:packId/schedules/:scheduleId/events/:eventId
    //very nested...
});

router.put("./update/:eventId", (req, res) => {
    // let packId = parseUrlPack(req.baseUrl)
    // let scheduleId = parseUrlSchedule(req.baseUrl)

    Pack.updateOne(
        { _id: packId, "schedules._id": scheduleId, "events._id": req.body.id },
        { $set: {"events.$.title": req.body.title, 
                "events.$.description": req.body.description,
                "events.$.address": req.body.address,
                "events.$.cost": req.body.cost
        }}).then(pls => res.json(pls))
});

router.delete("/delete/:eventId", (req, res) => {
    // let packId = parseUrlPack(req.baseUrl)
    // let scheduleId = parseUrlSchedule(req.baseUrl)

    Pack.updateOne(
        { _id: packId, "schedules._id": scheduleId },
        { $pull: { events: {_id: req.body.id}} }
    ).then(pls => res.json(pls))
});


module.exports = router;