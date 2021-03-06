import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdemployeeService } from '../ademployee.service';
import { AdEmployee } from '../components/index/AdEmployee';

@Component({
  selector: 'app-result-by-manager',
  templateUrl: './result-by-manager.component.html',
  styleUrls: ['./result-by-manager.component.css']
})
export class ResultByManagerComponent implements OnInit {
  ademployee: any = {};
  ademployees: AdEmployee[];

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private route: ActivatedRoute,
    private router: Router,
    private ademployeeservice: AdemployeeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ademployeeservice.searchMEmployee(params['manager_id']).subscribe((res: AdEmployee[])  => {
        this.ademployees = res;
    });
  })
  }

}
