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
        db.User.findOne({
            where: {
                email: req.body.email
            }, function(err, res) {
                bcrypt.compareSync(req.body.password, hash, function (err, res) {
                    const data = {
                        email: req.body.email,
                        password: req.body.password
                    }

                    fetch('/login', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(res => res.json())
                        .then(response => {
                            //server returning "JWT ...", so we need to split off the token and then create it 
                            // and then run it through login function in Auth
                            const token = response.token.split(' ')[1];
                            Auth.login(token);
                        })
                        .catch(error => console.error('Error:', error))
                })
            }
        })
    });
}