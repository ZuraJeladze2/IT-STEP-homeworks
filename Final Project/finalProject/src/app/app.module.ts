import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceCategoryComponent } from './components/choice-category/choice-category.component';
import { MonthlySaleComponent } from './components/monthly-sale/monthly-sale.component';

import { HttpClientModule } from '@angular/common/http';
import { EasierToChooseComponent } from './components/easier-to-choose/easier-to-choose.component';
import { Only4uComponent } from './components/only4u/only4u.component';
import { OtherCategoriesComponent } from './components/other-categories/other-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceCategoryComponent,
    MonthlySaleComponent,
    EasierToChooseComponent,
    Only4uComponent,
    OtherCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
