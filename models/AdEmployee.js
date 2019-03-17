

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdEmployee = new Schema({
  employee_name: {
    type: String
  },
  employee_id: {
    type: Number
  },
  manager_id: {
    type: Number
  },
  employee_dob: {
    type: Date
  },
  employee_experience: {
    type: Number
  },
  employee_skillset: {
    type: String
  }
},{
    collection: 'ademployees'
});

module.exports = mongoose.model('AdEmployee', AdEmployee);
