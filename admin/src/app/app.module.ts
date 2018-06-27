import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// import {FormsModule} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Defining routes
const appRoutes:Routes=[
{
  path:'admin/pages',
  component:PageComponent,
  data:{title:'Pages List'}
},
{
  path:'admin/pages/details-page/:id',
  component:PageDetailComponent,
  data:{title:'Page Details'}
},
{
  path:'admin/pages/add-page',
  component:PageCreateComponent,
  data:{title:'Create Pages'}
},
  {
    path:'admin/pages/edit-page/:id',
    component:PageEditComponent,
    data:{title:'Update Pages'}
  },
  { path:'admin/products',component:ProductComponent },
  { path:'admin/orders',component:AdminOrdersComponent },
  { path:'admin/products/new',component:ProductFormComponent },
  { path:'admin/categories',component:CategoryComponent},
  { path:'admin/categories/add-category', component:CategoryCreateComponent,data:{title:'Create Categories'}},
  { path:'admin/categories/details-category/:id', component:CategoryDetailComponent
  
  },
   
  
];
//REGISTERING ANGULAR MATERIAL

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
// import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

@NgModule({
  declarations: [
    AppComponent, 
    PageComponent,
    PageDetailComponent,
    PageCreateComponent,
    PageEditComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductComponent,
    CategoryComponent,
    CategoryCreateComponent,
    CategoryDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,    
    ReactiveFormsModule,
    HttpClientModule, BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
    
  ],
  
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule{ }
