const express = require('express');
const mongoose = require('mongoose');

var router = express.Router();
var Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    res.render("employee/addOrEdit", {
        ViewTitle: "Insert new Employee"
    });
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc) => {
        if (!err) {
            res.redirect('employee/list');
            console.log(res.body);
        }
        else {
            if (err.name = "ValidationError") {
                // console.log("error isss " +err);
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit", {
                    viewTitle: "insert Employee",
                    employee: req.body
                });
            }
            else {
                console.log("error during insert data" + err);
            }

        }
    });
}

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            case 'mobile':
                body['mobileError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/list', (req, res) => {
    res.json("data insterted from list");
});
module.exports = router;