const express = require("express");
const router = express.Router();
const Payment = require('../../models/Payment');
const passport = require('passport');
const Pack = require('../../models/Pack');

router.get("/test", (req, res) => res.json({ msg: "This is the payments route."}));

const parseURL = (baseUrl) => {
  let urlArr = baseUrl.split('/');
  return urlArr[3];
};

router.post("/new", (req, res) => {

  const newPayment = new Payment({
    title: req.body.title,
    spotterId: req.body.spotterId,
    chargeeIds: req.body.chargeeIds,
    amount: req.body.amount,
    category: req.body.category
  });
  
  let parsed = parseURL(req.baseUrl);
  Pack.updateOne(
    { _id: parsed },
    { $push: { payments: newPayment } }
  ).then(() => res.json(newPayment));
});

router.put("/update", (req, res) => {
  let parsed = parseURL(req.baseUrl);

  Pack.updateOne(
    { _id: parsed, "payments._id": req.body.id },
    // { $set: { "payments.$.title": req.body.title, "payments.$.description": req.body.description } }
    { $set: 
      { 
        "payments.$.title": req.body.title,
        "payments.$.amount": req.body.amount,
        "payments.$.category": req.body.category,
        "payments.$.chargeeIds": req.body.chargeeIds
      }
    }).then((response) => res.json(response));
});

router.delete("/delete", (req, res) => {
  let parsed = parseURL(req.baseUrl);

  Pack.updateOne(
    { _id: parsed },
    { $pull: { payments: { _id: req.body.id } } }
  ).then((response) => res.json(response));
});  

module.exports = router;