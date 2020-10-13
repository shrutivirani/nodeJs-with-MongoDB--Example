const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required: "This field is required"
    },
    email: {
        type:String
    },
    mobile: {
        type:String
    },
    city: {
        type:String
    }
});

//custom validation for an email
employeeSchema.path('email').validate((val) => {
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(val);
}, "Invalid email");

// custom validation of mobile
employeeSchema.path('mobile').validate((val) => {
    mobileRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return mobileRegex.test(val);
}, "invalid mobile");

mongoose.model('Employee', employeeSchema);