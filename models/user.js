
module.exports = function (sequelize, DataTypes) {

    const User = sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    })



    //     instanceMethods: {
    //         comparePassword : function(candidatePassword, cb) {
    //             bcrypt.compare(candidatePassword, this.getDataValue('password'), function(err, isMatch) {
    //                 if(err) return cb(err);
    //                 cb(null, isMatch);
    //             });
    //         },
    //         setToken: function(){


    //         },
    //         getFullname: function() {
    //             return [this.firstname, this.lastname].join(' ');
    //         }
    //     }
    // }



    // User.pre("create", async function(next) {
    //     try {
    //         //generate a salt
    //         const salt = await bcrypt.genSalt(10);
    //         const passwordHash = await bcrypt.hash(this.password, salt);

    //         console.log("salt: " + salt);
    //         console.log("Normal Password: " + this.password);
    //         console.log("Hashed Password: " + passwordHash);
    //     } catch(error) {
    //         next(error);
    //     }
    // });

    return User;
}