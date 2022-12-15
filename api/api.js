const express = require("express");
const app = express();
const mongoose = require("mongoose");

const router = new express.Router();
app.use(router)


router.get("/", (req, res) => {
    res.send('this is api page');
})

module.exports = router;
