const Taxi = ("../models/taxi");
const Review = ("../models/review");

function index(req, res) {
    Taxi.find({}, function (err, taxis) {
      if (err) return res.redirect('/');
      res.render('taxis/index', { taxis })
    });
  };

  function details(req, res) {
    Taxi.findById(req.params.id, function(err, taxi) {
        Ticket.find({taxi: taxi._id}, function(err, reviews){
            res.render('flights/details', {title: 'Taxi Detail', taxi, reviews});
        });
    });
};

function newTrip(req, res) {
  res.render("taxis/new");
};

module.exports = {
    index,
    details,
    new: newTrip,
}