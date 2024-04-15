const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.port || 8000;

app.use(express.json({ extended: false }));
app.use(cors());

app.use("/", require("./routes/index"));

app.listen(port, function (err) {
    if (err) {
        console.log(`Error occured while running the server at ${port}`);
    }
    console.log(`Yup! Successfully running server on ${port}`);
});