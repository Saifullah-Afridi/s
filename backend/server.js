const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const dbConnect = require("./config/databaseConnection");
const app = require("./app");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("the server is listening");
  dbConnect();
});
