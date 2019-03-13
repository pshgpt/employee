import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-by-manager',
  templateUrl: './search-by-manager.component.html',
  styleUrls: ['./search-by-manager.component.css']
})
export class SearchByManagerComponent implements OnInit {

  managerSearchForm:FormGroup;
  display:boolean=false;   
  constructor(private fb:FormBuilder) { }


  ngOnInit() {
    this.managerSearchForm = this.fb.group({
      manager_id:["",[Validators.required]]
    });
  }
search(){
this.display=true;
}
}
