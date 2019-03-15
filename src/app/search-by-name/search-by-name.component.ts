import { Component, OnInit } from '@angular/core';
import { AdEmployee } from '../components/index/AdEmployee';
import { AdemployeeService } from '../ademployee.service';
import  { MatDialog } from '@angular/material';
import { ResultByNameComponent } from '../result-by-name/result-by-name.component';
@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  
  ademployees: AdEmployee[];
  navbarOpen = false;

  
  constructor(private ademployeeservice: AdemployeeService, public dialog: MatDialog) { }


  ngOnInit() {
    this.ademployeeservice
      .getAdEmployees()
      .subscribe((data: AdEmployee[]) => {
      this.ademployees = data;
    });
  }

  openDialog(ademployee) {
    const dialogRef = this.dialog.open(ResultByNameComponent, {
      height: '250px',
      width: '100',
      data: ademployee,
      
    });
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
