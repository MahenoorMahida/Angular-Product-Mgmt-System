import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { ProductModel } from '../Models/productmodel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productlist: ProductModel[] = [];
  constructor(private router: Router, private _productservice: ProductService) { }

  addProduct(): void {
    this.router.navigate(['addproduct']);
  }
//   getname(): void {
//     this.router.navigate(['getname']);
//   }

//   userfilter(): void {
//     this.router.navigate(['fnamefilter']);
//   }

  getproduct() {
    this._productservice.getproducts().subscribe(data => { this.productlist = data; })
  }
  ngOnInit() {
    this.getproduct();
  }

  deleteProduct(id: number): void{
    var c = confirm("Are you sure you want to delete this record???");
    if(c==true)
    {
        this._productservice.deleteProduct(id).subscribe(data=>{
            this.getproduct();
            alert('Record Deleted SuccessFully!!!');
        });
    }
  
}
// search(product: ProductModel): void {
//   let result = confirm("Do you want to search product ?");
//   if (result) {
//     this._productservice.getProductById(user.id)
//       .subscribe(data => {
//         this.userlist = this.userlist.filter
//           (u => u !== user);
//         // this.getusers();
//       })
//   }
//}

//Modify User
editProduct(product: ProductModel): void {
  localStorage.removeItem("ProductID");
  localStorage.setItem("ProductID",
    product.ProductID.toString());
  this.router.navigate(['editProduct']);
  
}
getproducts(){
  this.router.navigate(['getproducts']);
}

}
