import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyserviceService } from '../companyservice.service';
@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {
  public companyID: string;
  public companyName: string;

  constructor(private route:ActivatedRoute,private _router:Router, private _service: CompanyserviceService) { 
    this.route.queryParams.subscribe(params => {
      this._service.search_word(params["company"]).subscribe(res =>{
        this.companyID = res[0].companyIds;
        this.companyName= res[0].companyName;         
      })
  });
  }

  ngOnInit() {
  }
  back_to_company(){
  this._router.navigate(['/company']);
 }
}
