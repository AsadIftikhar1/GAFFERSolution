import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Defining routes
const appRoutes:Routes=[
{
  path:'admin/pages',    //No arrow comes at the beggining
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
  MatFormFieldModule, MatToolbarModule, MatSidenavModule, MatListModule } from "@angular/material";
// import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
// import { ShahzarComponentComponent } from './shahzar-component/shahzar-component.component';

@NgModule({
  declarations: [
    AppComponent, 
    PageComponent,
    PageDetailComponent,
    PageCreateComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductComponent,
    CategoryComponent,
    CategoryCreateComponent,
    CategoryDetailComponent,
    MainNavComponent,
    FooterComponent,
    // ShahzarComponentComponent,
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
    MatFormFieldModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
    timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: false,
    }), // ToastrModule added
    
  ],
  
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule{ }
