const express = require("express");
const router = express.Router();

//importing data model schemas
let { fightData } = require("../models/models"); 

//GET all entries
router.get("/", (req, res, next) => { 
    fightData.find(  //Filters events to show events created within current organization instance
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    ).sort({ 'updatedAt': -1 }).limit(10);
});

module.exports = router;