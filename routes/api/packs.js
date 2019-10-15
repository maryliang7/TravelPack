const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const validatePackInput = require('../../validation/packs')
const Pack = require('../../models/Pack');
const passport = require('passport');

router.post('/join', (req, res) => {
  Pack.findOne({ name: req.body.name })
    .then(pack => {
      if(req.body.password === pack.password) {
        return res.json(pack._id)
      } 
      return res.status(400).json({nopackfound: 'Please check the pack name and password combination' });
    })
    .catch(err => res.status(404).json({ nopackfound: 'No packs found' }));

});

router.get('/user/:user_id', (req, res) => {
  Pack.find({ members: req.params.user_id })
    .then(packs => res.json(packs))
    .catch(err =>
      res.status(404).json({ nopacksfound: 'This user does not belong to any packs' }
      )
    );
});

router.get('/:id', (req, res) => {
  Pack.findById(req.params.id)
    .then(pack => res.json(pack))
    .catch(err =>
      res.status(404).json({ nopackfound: 'No pack found with that ID' })
    );
});

router.put('/:id/update', (req, res) => {
  Pack.findById(req.params.id)
    .then(pack => {
      pack.name = req.body.name || pack.name;
      pack.startDate = req.body.startDate || pack.startDate;
      pack.endDate = req.body.endDate || pack.endDate;
      pack.save().then( () => {
        if (req.body.members) {
          Pack.updateOne(
            { _id: pack.id },
            { $push: { members: req.body.members } }
          ).then(() => res.json(pack));
        } else {
          console.log('failed');
          return res.json({ 'kevin': 'is gayyy' });
        }

      });
    })
    .catch(err =>
      res.status(404).json({ nopackfound: 'No pack found with that ID' })
    );
});


router.delete('/:id', (req, res) => {
  Pack.findByIdAndDelete(req.params.id)
    .then(() => res.json(req.params.id))
    .catch(err => res.status(404).json('Error: ' + err))
})


router.post('/new',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePackInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPack = new Pack({
      packLeader: req.user.id,
      name: req.body.name,
      password: req.body.password,
      members: req.body.members,
      startDate: req.body.startDate,
      endDate: req.body.endDate
    });

    newPack.save().then(pack => res.json(pack));
  }
);

module.exports = router