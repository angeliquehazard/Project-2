const Taxi = ("../models/taxi");
const Review = ("../models/review");

function newReview(req, res) {
    res.render("taxis/:id/review");
  };

function createReview(req, res){
    Taxi.findById(req.params.id, function (err, taxi){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        taxi.reviews.push(req.body);
        taxi.save(function(err){
            res.redirect(`/taxis/${taxi._id}`);
        });
    });
}

module.exports = {
    newReview,
    createReview,
}