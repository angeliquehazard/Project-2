const Taxi = require("../models/taxi");
const Review = require("../models/review");

function index(req, res) {
    Taxi.find({}, function (err, taxis) {
      if (err) return res.redirect('/');
      res.render('taxis/index', { taxis })
    });
  };

  function details(req, res) {
    Taxi.findById(req.params.id, function(err, taxi) {
        Review.find({taxi: taxi._id}, function(err, reviews){
            res.render('taxis/details', {title: 'Taxi Detail', taxi, reviews});
        });
    });
};

function newTrip(req, res) {
  res.render("taxis/new");
};

function createTrip(req, res) {
  const taxi =  new Taxi(req.body);
  taxi.save(function (err){
      if(err) return res.redirect('taxis/new');
      res.redirect("/taxis");
  })};


module.exports = {
    index,
    details,
    new: newTrip,
    create: createTrip,
}