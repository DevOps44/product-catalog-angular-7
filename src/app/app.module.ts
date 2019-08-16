import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { PageNotFoundComponent } from './error/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProductDetailGuard } from './products/product-detail.guard';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome',pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
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
