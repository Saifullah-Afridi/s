const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const hotelRoutes = require("./routes/userRoutes");
const roomRoutes = require("./routes/roomRoutes");
const authRoutes = require("./routes/authRoutes");
const cookiePaser = require("cookie-parser");

const globalErrorHanlder = require("./services/globlErrorHandler");

//******************package middleware******************** */
app.use(cookiePaser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

// ***********************************Routes****************

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/rooms", roomRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/hotels", hotelRoutes);

app.all("*", globalErrorHanlder);
module.exports = app;
