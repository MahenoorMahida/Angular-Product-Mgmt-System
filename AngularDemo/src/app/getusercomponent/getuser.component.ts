import { OnInit, Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductModel } from '../Models/productmodel';

@Component({
    selector:'app-getid',
    templateUrl:'./getuser.component.html'
})
export class GetUserComponent implements OnInit{
    form:FormGroup;
    submitted:boolean=false;

    ngOnInit(): void {
     
        this.form=this.fb.group({
            ProductID:['']
        }

        );

    }
    product:ProductModel=null;
    constructor(private productService:ProductService,private fb:FormBuilder){
            
    }

    onSubmit(){
        this.submitted=true;
        // this.userservice.GetUser(this.form.value['id']).subscribe(data=>{this.form.controls['id'].setValue(data.firstname)});
        this.productService.GetProduct(this.form.value['ProductID']).subscribe(data=>{this.product = data});

        console.log(this.form.value['ProductID']);
    }
}