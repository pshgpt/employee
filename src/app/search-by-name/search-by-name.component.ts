import { Component, OnInit } from '@angular/core';
import { AdEmployee } from '../components/index/AdEmployee';
import { AdemployeeService } from '../ademployee.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  
  ademployees: AdEmployee[];

  constructor(private ademployeeservice: AdemployeeService) { }

  ngOnInit() {
    this.ademployeeservice
      .getAdEmployees()
      .subscribe((data: AdEmployee[]) => {
      this.ademployees = data;
    });
  }
}
