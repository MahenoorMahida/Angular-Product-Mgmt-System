import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './Services/product.service';
import { ProductModel } from './Models/productmodel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ProductComponent } from './Product/Product.component';
import { AddProduct } from './AddProduct/addproduct.component';
import { EditProductComponent } from './editProduct/editproduct.component';
import { GetUserComponent } from './getusercomponent/getuser.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProduct,
    EditProductComponent,
    GetUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
