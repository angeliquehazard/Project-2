const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taxiSchema = new Schema({
    taxiNo: {type: Number},
    destination: {type: String},
    departs: Date,
}, {timestamps: true}
);

module.exports = mongoose.model("Taxi", taxiSchema);