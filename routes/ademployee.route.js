// adunit.route.js

const express = require('express');
const app = express();
const adEmployeeRoutes = express.Router();

// Require AdUnit model in our routes module
let AdEmployee = require('../models/AdEmployee');

// Defined store route
adEmployeeRoutes.route('/add').post(function (req, res) {
  let adEmployee = new AdEmployee(req.body);
  adEmployee.save()
    .then(game => {
    res.status(200).json({'adEmployee': 'AdEmployee in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
adEmployeeRoutes.route('/').get(function (req, res) {
    AdEmployee.find(function (err, adEmployees){
    if(err){
      console.log(err);
    }
    else {
      res.json(adEmployees);
    }
  });
});

// Defined edit route
adEmployeeRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AdEmployee.findById(id, function (err, adEmployee){
      res.json(adEmployee);
  });
});
adEmployeeRoutes.route('/Resultmanager/:manager_id').get(function (req, res) {
  let manager_id = req.params.manager_id;
  AdEmployee.find({manager_id:manager_id}, function (err, adEmployee){
      res.json(adEmployee);
	
  });
});

//  Defined update route
adEmployeeRoutes.route('/update/:id').post(function (req, res) {
    AdEmployee.findById(req.params.id, function(err, adEmployee) {
    if (!adEmployee)
      return next(new Error('Could not load Document'));
    else {
        adEmployee.employee_name = req.body.employee_name;
        adEmployee.employee_id = req.body.employee_id;
        adEmployee.manager_id = req.body.manager_id;
        adEmployee.employee_dob = req.body.employee_dob;
        adEmployee.employee_experience = req.body.employee_experience;
        adEmployee.employee_skillset = req.body.employee_skillset;

        adEmployee.save().then(adEmployee => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
adEmployeeRoutes.route('/delete/:id').get(function (req, res) {
    AdEmployee.findByIdAndRemove({_id: req.params.id}, function(err, adEmployee){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = adEmployeeRoutes;
