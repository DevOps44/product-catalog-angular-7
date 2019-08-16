import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot([
     
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome',pathMatch: 'full'},

    ])
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    ProductService,
  ],
})

export class AppModule { }
