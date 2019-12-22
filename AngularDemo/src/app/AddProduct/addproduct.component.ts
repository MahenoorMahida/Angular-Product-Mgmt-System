import { OnInit, Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html'
})
export class AddProduct implements OnInit {

    addForm: FormGroup;
    submitted: boolean = false;
    ngOnInit() {
        this.addForm = this.formBuilder.group({
            ProductID: ['', Validators.required],
            ProductName: ['', Validators.required],
            ProductCategory: ['', Validators.required],
            ProductPrice: ['',Validators.required],
            // contact: ['', [Validators.required, Validators.pattern('[0-9]*')]]
        });


    }
    constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) {

    }


    // onSubmit() function
    onSubmit() {
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        this.productService.createProduct(this.addForm.value)
            .subscribe(data => {
                alert(this.addForm.controls.ProductID.value
                    + ' record is added successfully ..!');
                this.router.navigate(['product']);
            })
    }
}