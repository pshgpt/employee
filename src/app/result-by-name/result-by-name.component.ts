import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AdEmployee } from '../components/index/AdEmployee';
import { ActivatedRoute, Router } from '@angular/router';
import { AdemployeeService } from '../ademployee.service';
@Component({
  selector: 'app-result-by-name',
  templateUrl: './result-by-name.component.html',
  styleUrls: ['./result-by-name.component.css']
})
export class ResultByNameComponent implements OnInit {
  ademployee: any = {};
  ademployees: AdEmployee[];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private route: ActivatedRoute,
  private router: Router,
  private ademployeeservice: AdemployeeService)  { }

  ngOnInit() {
    
  }

}
