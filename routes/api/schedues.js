const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const Schedule = require('../../models/Schedule');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.get("/test", (req, res) => res.json({ msg: "This is the schedules route" }));


//New Schedule Behavior
//1. Schedules belong to packs. If a pack has a schedule with the same name --> render error that packs can't have schedule with same name
//2. Schedule has description. If no description --> render error saying that it requires a description
//3. Schedule has at least one Event. If no event --> Render error requiring at least one Event object in the array.
//4. Schedules need a range of dates. If no range of date is given --> render error saying that dates need to be selected
router.post("/new", (req, res) => {
    Schedule.findOne({title: req.body.title})
        .then(schedule => {
            if (schedule) {
                return res.status(400).json({schedule: "A schedule with this title already exists for this pack"})
            } else {
                const newSchedule = new Schedule({
                    packId: req.body.packId,
                    title: req.body.title,
                    description: req.body.description,
                    events: req.body.events,
                    date: req.body.date
                })
                newSchedule.save();
            }
        })
    })

module.exports = router;
