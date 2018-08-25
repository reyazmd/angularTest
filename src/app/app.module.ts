import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { CompanyComponent } from './company/company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyserviceService } from './companyservice.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanydetailsComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CompanyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
