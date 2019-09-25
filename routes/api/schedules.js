const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const Schedule = require('../../models/Schedule');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Pack = require('../../models/Pack');

router.get("/test", (req, res) => res.json({ msg: "This is the schedules route" }));

const parseURL = (baseUrl) => {
    let urlArr = baseUrl.split('/');
    return urlArr[3];
}

//New Schedule Behavior
//1. Schedules belong to packs. If a pack has a schedule with the same name --> render error that packs can't have schedule with same name
//2. Schedule has description. If no description --> render error saying that it requires a description
//3. Schedule has at least one Event. If no event --> Render error requiring at least one Event object in the array.
//4. Schedules need a range of dates. If no range of date is given --> render error saying that dates need to be selected
router.post("/new", (req, res) => {
    // Schedule.findOne({title: req.body.title})
    //     .then(schedule => {
    //         if (schedule) {
    //             return res.status(400).json({schedule: "Error. A schedule with this title already exists for this pack"})
    //         } else {


                const newSchedule = new Schedule({
                    title: req.body.title,
                    description: req.body.description,
                    events: req.body.events,
                    startDate: req.body.date,
                    endDate: req.body.date
                })
                let parsed = parseURL(req.baseUrl);
                newSchedule.save()//.then(schedule => res.json(schedule));

                // const pack = Pack.find(parsed);
                Pack.updateOne(
                    {_id: parsed},
                    { $push: {schedules:  newSchedule }}
                ).then(schedule => res.json(schedule));
                // Pack.update({_id: parsed}, {schedules: {[schedules.newSchedule.id]: newSchedule} })
            // }
        })
    // })

router.put("/update", (req, res) => {
    Schedule.findOne({title: req.body.title})
        .then(schedule => {
            if (schedule) {
                const newSchedule = new Schedule({
                    title: req.body.title,
                    description: req.body.description,
                    events: req.body.events,
                    startDate: req.body.date,
                    endDate: req.body.date
                })
                newSchedule.save();
                } else {
                    return res.status(400).json({schedule: "Error. No schedule with this title exists to update."
                })
            }
        })
    })

module.exports = router;
