import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  errorMessage = "";
  product: IProduct | undefined;
  public _productService: ProductService;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService : ProductService) {
                this._productService = productService; 
    console.log(`Selected product Id: ${(this.route.snapshot.paramMap.get('id'))}`);   //can use an observable if the router url will change but here this works
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id'); //get the product id of the selected product
    if (param) {
      const id = +param; //convert the string to an integer id
      this.getProduct(id); //calls the getProduct() method which fetches the product from the ProductService class
    }
  }

    //subscribe to the getProductById() method in the ProductService
  getProduct(id: number) {
    this._productService.getProductById(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }
  //   this.pageTitle += `: ${id}`;
  //   this.product = {
  //     "productId": 1,
  //   "productName": "Leaf Rake",
  //   "productCode": "GDN-0011",
  //   "releaseDate": new Date("March 19, 2016"),
  //   "description": "Leaf rake with 48-inch wooden handle.",
  //   "price": 19.95,
  //   "starRating": 3.2,
  //   "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  //   }
  // }

    //navigate back to the products list
  onBack(): void {
    this.router.navigate(['/products']);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `${this.product.productName} has ${message} rating.`;
    console.log("The rating message in StarComponent was clicked!")
  }

}
