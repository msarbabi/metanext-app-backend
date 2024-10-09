const express = require("express");
const router = express.Router();

const {chartFakeData, tableFakeData} = require("../data/fakeData")

router.get("/chartData", (req, res) => {
    res.json(chartFakeData);
});

router.get("/tableData", (req, res) => {
    res.json(tableFakeData);
});

module.exports = router;