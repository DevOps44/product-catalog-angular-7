//interface to strongly hook the products array data type instead of any[]

export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: Date;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

//to be used if we need to create product logic
export class Product implements IProduct {
    constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public releaseDate: Date,
        public price: number,
        public description: string,
        public starRating: number,
        public imageUrl: string) {
        }

        calculateDiscount(percent: number): number {
            return this.price - (this.price * percent / 100);
        }
}