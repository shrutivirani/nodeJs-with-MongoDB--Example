const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',
                {useNewUrlParser: true},
                (err) => {
                    if(!err) {console.log('DataBase Connection Succeeded')}
                    else{console.log('DataBase cant connect' + err)}
                });

require('./employee.model');