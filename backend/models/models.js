const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//var ObjectId = require('mongoose').Types.ObjectId; //https://stackoverflow.com/questions/8111846/how-to-set-objectid-as-a-data-type-in-mongoose

//require("dotenv").config();  //To load ORGANIZATION variable -- this code is from old source code same with line 4

//collection for fightData
let fightDataSchema = new Schema({
    _id: { type: String, default: uuid.v1 },
    cardName: {
        type: String,
        require: true
    },
    matchUp: {
        type: String,
    
    }


}, {
    collection: 'fightData',
    timestamps: true
});


// create models from mongoose schemas
const fightdata = mongoose.model('fightData', fightDataSchema);


// package the models in an object to export 
module.exports = { fightdata }
