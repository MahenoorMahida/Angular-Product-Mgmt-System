import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProduct } from './AddProduct/addproduct.component';
import { ProductComponent } from './Product/Product.component';
import { EditProductComponent } from './editProduct/editproduct.component';
import { GetUserComponent } from './getusercomponent/getuser.component';

const routes: Routes = [
  {path: 'product', component:ProductComponent},
  {path: 'addproduct', component:AddProduct},
  { path: 'editProduct', component: EditProductComponent },
  { path: 'getid', component: GetUserComponent },


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
