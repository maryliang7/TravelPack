const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const schedules = require("./routes/api/schedules");
const packs = require("./routes/api/packs");

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

app.get("/", (req, res) => res.send("Suhh"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/packs", packs);
app.use("/api/packs/:packId/schedules", schedules);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));