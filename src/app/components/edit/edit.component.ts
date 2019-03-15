import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdEmployee } from '../index/AdEmployee';
import { AdemployeeService } from '../../ademployee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  ademployee: any = {};
  angForm: FormGroup;
  navbarOpen = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ademployeeservice: AdemployeeService,
    private fb: FormBuilder) {
      this.createForm();
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.ademployeeservice.editAdEmployee(params['id']).subscribe(res => {
          this.ademployee = res;
      });
    });
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

    updateAdEmployee(employee_name, employee_id, manager_id, employee_dob, employee_experience, employee_skillset) {
      this.route.params.subscribe(params => {
          this.ademployeeservice.updateAdEmployee(employee_name, employee_id, manager_id, employee_dob, employee_experience, employee_skillset, params['id']);
          this.router.navigate(['index']);
      });
    }
}
