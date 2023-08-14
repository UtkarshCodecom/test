const express = require("express");
const app = express();
const user = require("./routes/userRoute");
const errorMiddleware = require("./middleware/error");
const product = require("./routes/productRoute");
const payment = require("./routes/paymentRoute");
const cookieParser = require("cookie-parser");
const order = require("./routes/orderRoute")
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv")
require("dotenv").config({ path: "config/config.env" });
  

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
//error Hander
app.use(errorMiddleware);

app. get('/', function(req, res){ res. send("Hello world!"); });

module.exports = app;
