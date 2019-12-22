import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductModel } from '../Models/productmodel';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditProductComponent implements OnInit {

  editForm: FormGroup;
  submitted: boolean = false;
  product: ProductModel;
  constructor(private fb: FormBuilder,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      ProductID: [''],
          ProductName: [''],
          ProductCategory: [''],
          ProductPrice: [''],
    });
  
    if (localStorage.getItem("ProductID") != null) {
      let ProductID = localStorage.getItem("ProductID");
      console.log(ProductID);
      if (!ProductID) {
        alert('Invalid Action');
        this.router.navigate(['edit']);
        return;
      }
     
    

      this.productService.GetProduct(+ProductID)
        .subscribe(data => {
          this.editForm.setValue(data)
        });
    }
    else {
      this.router.navigate(['/product']);
    }
  }

  onSubmit() {
    this.submitted = true;
    // if (this.editForm.invalid) {
    //   return;
    // }
    this.productService.updateProduct(this.editForm.value)
      // .pipe(first())
      .subscribe(data => {
        alert("hello");
        console.log(data);
        this.router.navigate(['product']);
      }, error => {
        alert(error);
      });
  }


}
