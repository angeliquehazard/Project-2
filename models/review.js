const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    comments: { type: String, required: true },
    rating: { type: Number },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
        userName: String,
        userAvatar: String
},{
    timestamps: true
})

module.exports = mongoose.model("Review", reviewSchema);