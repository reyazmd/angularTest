import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanydetailsComponent } from './companydetails/companydetails.component'
import { CompanyComponent } from './company/company.component';
const routes: Routes = [
  {path:'',redirectTo:'company',pathMatch:'full'},
  {path:'company',component:CompanyComponent},
  {path:'details',component:CompanydetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
