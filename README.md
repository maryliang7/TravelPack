# TravelPack

## Description

A travel web application that allows members to join a pack and plan a vacation together. Users can join multiple packs, and each pack is composed of one or more schedule(s) created by the members, which then filled with events. Users can also keep track of money owed to other pack members as well as upload photos to the group.

## Technologies Used

* MERN: mongoDB, Express, React, Node.js
* Amazon Web Services
* Chart.js

## Link

[TravelPack](http://travel-pack.herokuapp.com/)

## Site Features

---

### Pack Show

![Pack Show](/readme_media/pack-show.png)

> Shows Pack Information, and has links to the schedules, expenses and photo sections. Pack Code and Password are distributed to other people in order for them to join the pack as well.

```
Backend action for joining a pack

export const getPacks = (data) => (dispatch) => (
  APIUtil.getPacks(data)
    .then(pack => dispatch(receivePack(pack)))
    .catch(err => console.log(err))
)

router.post('/join', (req, res) => {
  Pack.findOne({ _id: req.body.id })
    .then(pack => {
      if(req.body.password === pack.password) {
        return res.json(pack._id)
      } 
      return res.status(400).json({nopackfound: 'Please check the pack name and password combination' });
    })
    .catch(err => res.status(404).json({ nopackfound: 'No packs found' }));

});
```

### Expenses

![Pack Expenses](/readme_media/expenses.gif)

> Expenses allow pack members to keep track of any debt owed to other pack members. Also has a breakdown of what the money is being spent on.

```
New Payment route

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
```

### Schedule and Events

> Allow pack members to create schedules and events for their pack. Schedules can have many events.

```
Schedule's Backend route for updating nested objects with MongoDB.

router.put("/:scheduleId", (req, res) => {
  let packId = parseURL(req.baseUrl);
  Pack.findOneAndUpdate(
    { _id: packId, "schedules._id": req.params.scheduleId },
    { $set: {"schedules.$.startDate": req.body.startDate,
            "schedules.$.endDate": req.body.endDate,
            "schedules.$.title": req.body.title
    }}).then(() => { 
      Pack.find({_id: packId, "schedules._id": req.params.scheduleId},
        { "schedules.$": 1})
        .then(schedule => res.json(schedule[0].schedules[0]))
    });
});
```

```
Event's axios API call. Deeply nested.

export const updateEvent = data => {
  return axios.put(`api/packs/${data.packId}/schedules/${data.scheduleId}/events/${data.eventId}`, data)
}
```
### Photos

> Allow pack members to upload and share photos with all other members of the pack.

```
Photo upload route using AWS

router.post("/upload", upload.single("file"), function(req, res) {
  
  const file = req.file;
  const s3FileURL = keys.AWS_Uploaded_File_URL_LINK;

  let s3bucket = new AWS.S3({
    accessKeyId: keys.AWS_ACCESS_KEY_ID,
    secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
    region: keys.AWS_REGION
  });

  //Where you want to store your file

  var params = {
    Bucket: keys.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
  };

  s3bucket.upload(params, function(err, data) {
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      res.send({ data });
      var newFileUploaded = {
        description: req.body.description,
        fileLink: s3FileURL + file.originalname,
        s3_key: params.Key
      };
      var document = new DOCUMENT(newFileUploaded);
      document.save(function(error, newFile) {
        if (error) {
          throw error;
        }
      });
    }
  });

});
```

---

### Distribution of Tasks

* User Authentication: Mary, Justin
* Packs CRUD: Mary
* Schedules CRUD: Kevin
* Events CRUD: Kevin
* Payments CRUD: Mary, Mohit
* AWS Photo Uploading: Justin
