const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();
const userRoute = require("./routes/userRoute");

connectDB();

app.use(express.json());
app.use("/bms/users", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
