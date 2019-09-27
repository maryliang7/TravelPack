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

router.get('/:scheduleId', (req, res) => {
    Schedule.find({ _id: req.body.id })
        .then(schedule => res.json(schedule))
        .catch(err => res.status(404).json({ noschedulefound: 'No schedule found' }));
})

router.post("/new", (req, res) => {
    const newSchedule = new Schedule({
        title: req.body.title,
        description: req.body.description,
        events: req.body.events,
        startDate: req.body.date,
        endDate: req.body.date
    })

    let parsed = parseURL(req.baseUrl);

    Pack.updateOne(
        {_id: parsed},
        { $push: {schedules:  newSchedule }}
    ).then(() => res.json(newSchedule));
})

router.put("/update/:scheduleId", (req, res) => {
    let parsed = parseURL(req.baseUrl);

    Pack.updateOne(
        { _id: parsed, "schedules._id": req.body.id },
        { $set: {"schedules.$.title": req.body.title, "schedules.$.description": req.body.description} }
        ).then((pls) => res.json(pls));
})    

router.delete("/delete/:scheduleId", (req, res) => {
    let parsed = parseURL(req.baseUrl);

    Pack.updateOne(
        { _id: parsed },
        { $pull: { schedules: {_id: req.body.id}} }
    ).then((pls) => res.json(pls));
})    

module.exports = router;
