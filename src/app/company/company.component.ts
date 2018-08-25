import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { CompanyserviceService } from '../companyservice.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  searchTerm : FormControl = new FormControl();
  
  searchResult = [];

  constructor(private _router:Router, private _service: CompanyserviceService) { 
    this.searchTerm.valueChanges
    .distinctUntilChanged()
    .debounceTime(200) 
    .subscribe(data => {
      if(data && data.length >= 3){
        this._service.search_word(data).subscribe(response =>{
          console.log("reyaz=",response);
            this.searchResult = response
         
        })
      }
    })
  }

  ngOnInit() {
  }
  
  showDetails(){
    console.log("VALUE=="+this.searchTerm.value);
    
    this._router.navigate(['/details'],{queryParams:{company :this.searchTerm.value}});
  }
}
