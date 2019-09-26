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


// router.post("/new", (req, res) => {
//   const newPayment = new Payment({
//     title: req.body.title,
//     spotterId: req.user.id,
//     chargeeIds: req.body.chargeeIds,
//     amount: req.body.amount,
//     category: req.body.category
//   });
//   newPayment.save();
// });

router.post("/new", (req, res) => {

  const newPayment = new Payment({
    title: req.body.title,
    spotterId: req.body.spotterId,
    chargeeIds: req.body.chargeeIds,
    amount: req.body.amount,
    category: req.body.category
  });
  // newPayment.save();
  
  let parsed = parseURL(req.baseUrl);
  Pack.updateOne(
    { _id: parsed },
    { $push: { payments: newPayment } }
  ).then(() => res.json(newPayment));
});

router.put("/update", (req, res) => {
  Payment.findOne({ title: req.body.title })
    .then(payment => {
      if (payment) {
        const newPayment = new Payment({
          title: req.body.title,
          spotterId: req.body.spotterId,
          chargeeIds: req.body.chargeeIds,
          amount: req.body.amount,
          category: req.body.category
        });
        newPayment.save()
          .then(payment => res.json(payment));
      } else {
        return res.status(400).json({
          payment: "Error. No payment with this title exists to update."
      });
    }
  });
});

module.exports = router;