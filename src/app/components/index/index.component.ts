import { Component, OnInit } from '@angular/core';
import { AdEmployee } from './AdEmployee';
import { AdemployeeService } from '../../ademployee.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  ademployees: AdEmployee[];
  navbarOpen = false;

  ngOnInit() {
    this.ademployeeservice
      .getAdEmployees()
      .subscribe((data: AdEmployee[]) => {
      this.ademployees = data;
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private ademployeeservice: AdemployeeService) { }

  deleteAdEmployee(id) {
    this.ademployeeservice.deleteAdEmployee(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
