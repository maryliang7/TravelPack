require("dotenv").config();
const cors = require("cors");
const fileUploadRoutes = require("./routes/fileUploadRoutes");
const express = require("express");
const app = express();
// const config = require("./config/config");

const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const aws = require('aws-sdk');

const users = require("./routes/api/users");
const packs = require("./routes/api/packs");

const events = require("./routes/api/events");

const schedules = require("./routes/api/schedules");
const payments = require("./routes/api/payments");
const photos = require("./routes/api/photos");

app.use(cors());



//HEROKU DEPLOYMENT CODE
const path = require('path');

//tell our server to load static build folder in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
//HEROKU DEPLOYMENT CODE

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("SSSS"));

app.use(passport.initialize());
require('./config/passport')(passport);



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//AWS CODE
app.use(express.static(path.join(__dirname, "build")));

// make the '/api/document' browser url route to go to documentRoutes.js route file
app.use("/api/document", fileUploadRoutes);

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(err.status || 500);
  res.render("error");

});

app.use("/api/users", users);
app.use("/api/packs", packs);
app.use("/api/packs/:packId/schedules", schedules);

app.use("/api/events", events); //delete later, this is for testing
app.use("/api/packs/:packId/schedules/events", events);

app.use("/api/packs/:packId/payments", payments);

app.use("/api/packs/:packId/photos", photos);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// config.connectDB();

module.exports = app;