const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
require("./dbConnection");

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.use("/", require("./Routers/userRouter"));
app.use("/", require("./Routers/blogRouter"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening at port ${port}...`);
});
