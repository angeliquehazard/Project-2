const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    comments: { type: String },
    rating: { type: Number },
},{
    timestamps: true
})

module.exports = mongoose.model("Review", reviewSchema);