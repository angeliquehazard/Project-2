const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/taxis", {
    useNewURLParser: true,
    useUnifiedTopology: true,
})
