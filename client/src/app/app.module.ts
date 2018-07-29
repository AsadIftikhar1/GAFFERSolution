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
// import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
// import {MaterialModule} from '@angular/material';

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
  MatFormFieldModule, MatToolbarModule, MatSidenavModule, MatListModule } from "@angular/material";
import { ProdcatComponent } from './prodcat/prodcat.component';
import { PageComponent } from './page/page.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    // BsNavbarComponent,
    ProductsComponent,
    ProdcatComponent,
    PageComponent,
    PageDetailComponent,
    MainNavComponent
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
      { path:'login',component:LoginComponent},
      { path:'register',component:RegisterComponent},
      { path:'products/category/:title',component:ProdcatComponent},
      { path:'pages',component:PageComponent},
      { path:'pages/:title',component:PageDetailComponent}

    ]),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
