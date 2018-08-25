import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyserviceService {
  url: string
  constructor(private http : Http) { 
    this.url  = 'https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete?company_name='
  }

  search_word(term){
    return this.http.get(this.url + term).map(res => {
        return res.json().searchResults
    })
}

}
