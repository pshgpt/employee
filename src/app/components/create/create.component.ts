import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdemployeeService } from '../../ademployee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  navbarOpen = false;

  constructor(private ademployeeservice: AdemployeeService, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  createForm() {
    this.angForm = this.fb.group({
      employee_name: ['', Validators.required ],
      employee_id: ['', Validators.required ],
      manager_id: ['', Validators.required ],
      employee_dob: ['', Validators.required ],
      employee_experience: ['', Validators.required ],
      employee_skillset: ['', Validators.required ]
   });
  }

  addAdEmployee(employee_name, employee_id, manager_id, employee_dob, employee_experience, employee_skillset) {
    this.ademployeeservice.addAdEmployee(employee_name, employee_id, manager_id, employee_dob, employee_experience, employee_skillset);
}

}
