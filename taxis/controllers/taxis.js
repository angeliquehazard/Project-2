const Taxi = ("../models/taxi");
const Review = ("../models/review");

function index(req, res) {
    Taxi.find({}, function (err, taxis) {
      if (err) return res.redirect('/');
      res.render('taxis/index', { taxis })
    });
  };

module.exports = {
    index,
}