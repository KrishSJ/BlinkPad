var express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { connectMongoDB } = require("./connection");
const cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

connectMongoDB();

const userActivitySchema = new mongoose.Schema({
  score: {
    type: Number,
    default: 0,
  },
  imageURI: {
    type: String,
  },
});

const UserActivity = mongoose.model("UserActivity", userActivitySchema);

const user1 = new UserActivity({
  score: 1,
  imageURI:
    "https://observer.com/wp-content/uploads/sites/2/2020/03/200205-loki.jpg?quality=80",
});
const user2 = new UserActivity({
  score: 2,
  imageURI:
    "https://vignette.wikia.nocookie.net/headhuntersholosuite/images/a/a4/Alexander_Pierce_-_MCU.jpg/revision/latest/scale-to-width-down/340?cb=20140407152428",
});
const user3 = new UserActivity({
  score: 3,
  imageURI:
    "https://i.insider.com/5aeb60957708e921e51912a5?width=1100&format=jpeg&auto=webp",
});
const user4 = new UserActivity({
  score: 4,
  imageURI:
    "https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/04/01085759/Ultron-Lead.jpg",
});

//user4.save();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/getScores", async (req, res) => {
  await UserActivity.find()
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      res.send(err);
    });
});

app.put("/like", async (req, res) => {
  await UserActivity.findOneAndUpdate(
    { _id: req.body._id },
    { $inc: { score: 1 } }
  )
    .then((result) => {
      res.status(200).end("liked");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put("/dislike", async (req, res) => {
  await UserActivity.findOneAndUpdate(
    { _id: req.body._id },
    { $inc: { score: -1 } }
  )
    .then((result) => res.send("disliked"))
    .catch((err) => res.send(err));
});

app.listen(3002, function () {
  console.log("listening on port 3002!");
});
