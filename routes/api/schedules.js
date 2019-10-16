const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const Schedule = require('../../models/Schedule');
const Pack = require('../../models/Pack');

router.get("/test", (req, res) => res.json({ msg: "This is the schedules route" }));

const parseURL = (baseUrl) => {
    let urlArr = baseUrl.split('/');
    return urlArr[3];
}

//I am able to find all Schedules for a Pack
router.get('/', (req, res) => {
    let packId = parseURL(req.baseUrl);
    Pack.findOne({ _id: packId})
        .then(pack => res.json(pack.schedules))
        .catch(err => res.status(404).json({ noschedulefound: 'Schedules not found' }));
})

//OH MY GOD THIS WORKS
router.get('/:scheduleId', (req, res) => {
    let packId = parseURL(req.baseUrl);
    // debugger
    Pack.find({_id: packId, "schedules._id": req.params.scheduleId},
    { "schedules.$": 1})
      .then(schedule => res.json(schedule))
      .catch(err =>
        res
          .status(404)
          .json({ noschedulefound: "No schedule found with that id" })
      );
})

//I can make a new schedule
router.post("/new", (req, res) => {
    const newSchedule = new Schedule({
        title: req.body.title,
        events: req.body.events,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    })

    let packId = parseURL(req.baseUrl);

    Pack.updateOne(
        {_id: packId},
        { $push: {schedules:  newSchedule }}
    ).then(() => res.json(newSchedule));
})

//I can update a schedule
router.put("/:scheduleId", (req, res) => {
    let packId = parseURL(req.baseUrl);
    // debugger;
    Pack.updateOne(
        { _id: packId, "schedules._id": req.params.scheduleId },
        { $set: {"schedules.$.title": req.body.title} }
        ).then((pls) => res.json(pls));
})    

//I can delete a schedule
router.delete("/:scheduleId", (req, res) => {
    let packId = parseURL(req.baseUrl);

    Pack.updateOne(
        { _id: packId },
        { $pull: { schedules: {_id: req.params.scheduleId}} }
    ).then(() => res.json(req.params.scheduleId));
})    

module.exports = router;
