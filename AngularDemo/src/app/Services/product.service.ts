import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductModel } from '../Models/productmodel';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    baseurl = "http://localhost:64274/Api/Product";

    constructor(private _http: HttpClient) {

    }
    // GetProductname(name: string) {
    //     return this._http.get<ProductModel>(this.baseurl + '/GetName?name=' + name);
    // }
    getproducts() {
        return this._http.get<ProductModel[]>(this.baseurl + "/AllproductDetails");
    }
    // Add Product
    createProduct(product: ProductModel) {
        return this._http.post(this.baseurl + "/InsertProductDetails", product);
    }
    deleteProduct(id: number){
        return this._http.delete(this.baseurl+"/DeleteProductDetails?id=" + id);
    }
    GetProduct(id:number){
        return this._http.get<ProductModel>(this.baseurl+"/GetproductDetailsById?id=" + id);
    }

    // getProductById(id: number) {
    //     return this._http.get<ProductModel>(this.baseurl + "/GetproductDetailsById?id=" + id);
    // }

     // // Modify user
    //  updateProduct(pro: ProductModel) {
    //     return this._http.put(this.baseurl + '/UpdateProductDetails/', pro);
    // }
    
    updateProduct(product: ProductModel) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this._http.put<ProductModel>(this.baseurl + '/UpdateProductDetails/', product, httpOptions);
    }

}