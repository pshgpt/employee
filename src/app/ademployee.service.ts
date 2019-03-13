import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdEmployee } from './components/index/AdEmployee';

@Injectable({
  providedIn: 'root'
})
export class AdemployeeService {

  uri = 'http://localhost:4000/ademployees';

  constructor(private http: HttpClient) { }

  addAdEmployee(employee_name, employee_id, manager_id, employee_dob, employee_experience, employee_skillset) {
    const obj = {
      employee_name: employee_name,
      employee_id: employee_id,
      manager_id: manager_id,
      employee_dob: employee_dob,
      employee_experience: employee_experience,
      employee_skillset: employee_skillset
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getAdEmployees() {
    return this
           .http
           .get(`${this.uri}`);
}

editAdEmployee(id) {
  
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
}

searchMEmployee(id) {
  console.log("ho")
  return this
            .http
            .get(`${this.uri}/Resultmanager/${id}`);
}

updateAdEmployee(employee_name, employee_id, manager_id, employee_dob, employee_experience, employee_skillset, id) {

  const obj = {
    employee_name: employee_name,
      employee_id: employee_id,
      manager_id: manager_id,
      employee_dob: employee_dob,
      employee_experience: employee_experience,
      employee_skillset: employee_skillset
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

  deleteAdEmployee(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
