const Taxi = require("../models/taxi");
const Review = require("../models/review");

function createReview(req, res){
    Taxi.findById(req.params.id, function (err, taxi){
        taxi.reviews.push(req.body);
        taxi.save(function(err){
            res.redirect(`/taxis/${taxi._id}`);
        });
    });
}
// how do i make this function?
// function editReview(req, res) {
//     Review.findById(req.params.id, function (err, review){
        
//     })
// }

function deleteReview(req, res){
    Review.findByIdAndDelete(req.params.id, function(err, review){
        res.redirect("/reviews");
    });
}

module.exports = {
    createReview,
    // editReview,
    deleteReview,
}