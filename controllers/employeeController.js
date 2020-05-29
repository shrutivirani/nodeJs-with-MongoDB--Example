const express = require('express');
const mongoose = require('mongoose');

var router = express.Router();
var Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "insert Employee"
    });
});

router.post('/', (req, res) => {
    insertRecord(req,res);
});

function insertRecord(req,res){
    var employee = new Employee();
    employee.fullName = req.body.FullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc) => {
        if(!err) {
            res.redirect('employee/list');
            console.log(res.body);
        }
        else {
            console.log("error during insert data" +err);
        }
    });
}

router.get('/list', (req,res) => {
    res.json("from list");
});
module.exports = router;