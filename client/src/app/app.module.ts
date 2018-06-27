import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserService} from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


//Defining routes
const appRoutes:Routes=[
  {
    path:'products',
    component:ProductsComponent,
    data:{title:'Products'}
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
import { ProdcatComponent } from './prodcat/prodcat.component';
import { CartComponent } from './cart/cart.component';
import { PageComponent } from './page/page.component';
import { PageDetailComponent } from './page-detail/page-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProdcatComponent,
    CartComponent,
    PageComponent,
    PageDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    RouterModule.forRoot([
      { path:'',component:ProductsComponent},
      { path:'products',component:ProductsComponent},
      { path:'shopping-cart',component:ShoppingCartComponent},
      { path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'products/category/:title',component:ProdcatComponent},
      {path:'cart/add/:title',component:CartComponent},
      {path:'pages',component:PageComponent},
      {path:'pages/:title',component:PageDetailComponent}

    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
