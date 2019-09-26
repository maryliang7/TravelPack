const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const validatePackInput = require('../../validation/packs')
const Pack = require('../../models/Pack');
const passport = require('passport');
router.get('/', (req, res) => {
  Pack.find({ name: req.body.name })
    .then(pack => res.json(pack))
    .catch(err => res.status(404).json({ notpacksfound: 'No packs found' }));

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

router.put('/:id', (req, res) => {
  Pack.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => Pack.findById(req.params.id).then(pack => res.json(pack)))
    .catch(err =>
      res.status(404).json({ nopackfound: 'No pack found with that ID' })
    );
});

router.delete('/:id', (req, res) => {
  Pack.findByIdAndDelete(req.params.id)
    .then(() => res.json(req.params.id))
    .catch(err => res.status(404).json('Error: ' + err))
})


router.post('/',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePackInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPack = new Pack({
      packLeader: req.user.id,
      name: req.body.name,
      password: req.body.password,
      startDate: req.body.startDate,
      endDate: req.body.endDate
    });

    newPack.save().then(pack => res.json(pack));
  }
);

module.exports = router