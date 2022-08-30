const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    comments: { type: String },
    rating: { type: Number },
},{
    timestamps: true
})

const taxiSchema = new Schema({
    taxiNo: {type: Number},
    destination: {type: String},
    departs: Date,
    reviews: [reviewSchema]
}, {timestamps: true}
);

module.exports = mongoose.model("Taxi", taxiSchema);