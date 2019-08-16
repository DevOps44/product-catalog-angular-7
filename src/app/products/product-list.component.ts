import { Component, OnInit } from "@angular/core";
import { IProduct } from "../model/product";
import { ProductService } from "./product.service";


@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageNumber: number = 2;
    showImage: boolean = true;
    errorMessage: string; //to handle errors from the HttpResponse

    public _productService: ProductService;

    filteredProducts: IProduct[];

    constructor(private productService : ProductService) {
      this._productService = productService;
    }

    _listFilter: string; 
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[];
    //products: Observable<IProduct[]>

    onRatingClicked(message: string): void {
      this.pageTitle = `${this.products.indexOf} has ${message} rating`;
      console.log("The rating message in StarComponent was clicked!")
    }

    performFilter(filterBy: string): IProduct[] {
     filterBy = filterBy.toLocaleLowerCase();
     return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    showOrHideImage(event): void {
        console.log("Toggling the show image button ", event);
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      //we have to subscribe to the Observable returned in the ProductService class
      this._productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
    }

}