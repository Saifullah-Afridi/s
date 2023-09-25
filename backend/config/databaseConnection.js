const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to database successfully"))
    .catch((err) => {
      console.log("Conncection to database failed");
      console.log(err.message);
    });
  mongoose.set("strictQuery", true);
};

module.exports = dbConnect;
