const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    username: { type: String, required: true, unique: true},
    email: { 
        type: String, 
        required: 'Email address is required',
        unique: "Email already used",
        validate: [validateEmail, 'Please fill a valid email address'] 
    },
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
