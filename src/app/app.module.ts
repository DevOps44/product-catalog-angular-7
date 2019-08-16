import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    ProductModule, 
    AppRoutingModule 
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    ProductService,
  ],
})
export class AppModule { }
