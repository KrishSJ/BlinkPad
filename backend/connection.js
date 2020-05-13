var mongoose = require("mongoose");

const mongoDBURI =
  "mongodb+srv://nithin:nithin@grubhubtest-ly2ht.mongodb.net/BlinkPad?retryWrites=true&w=majority";

const connectMongoDB = async () => {
  const options = {
    poolSize: 900,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  try {
    await mongoose.connect(mongoDBURI, options);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Could not connect to MongoDB", err);
  }
};

module.exports = { connectMongoDB };
