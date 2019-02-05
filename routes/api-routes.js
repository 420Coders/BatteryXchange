const db = require("../models");
const jwt = require('jsonwebtoken');
// const passport = require("../utils/passport");
var bcrypt = require('bcryptjs');

module.exports = function (app) {

    //creating a new user
    app.post("/api/newUser", (req, res) => {

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        db.User.create({
            email: req.body.email,
            password: hash
        })
            .then(function (dbUser) {
                res.json(dbUser)
            });
    });


    //logging in
    app.post("/api/login", (req, res) => {
        db.User.findOne({"username" : req.body.username}, function(err, User) {
            const response = {
                status : 401,
                message : "failed"
            }
            if(err) {
                response.status = 401;
                response.message = "failed";
            }
            if(bcrypt.compareSync(req.body.password, User.password)) {
                response.status = 201;
                response.message = "success";
            } else {
                response.status = 401;
                response.message = "failed";
            }
        })
    })
}