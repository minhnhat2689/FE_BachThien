import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './common/app.component';
import { TrangChuComponent } from './client/trang-chu/trang-chu.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductComponent } from './client/product/product.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminProductComponent } from './admin/product/admin-product/admin-product.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPostComponent } from './admin/post/admin-post/admin-post.component';
import { ShareExpComponent } from './client/post/share-exp/share-exp.component';
import { NhipcauComponent } from './client/post/nhipcau/nhipcau.component';
import { NewsComponent } from './client/post/news/news.component';
import { DetailComponent } from './client/product/detail/detail.component';
import { DetailPostComponent } from './client/post/detail-post/detail-post.component';
import { AddPostComponent } from './admin/post/add-post/add-post.component';
import { EditPostComponent } from './admin/post/edit-post/edit-post.component';



@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    LoginComponent,
    DashboardComponent,
    AdminProductComponent,
    EditProductComponent,
    AddProductComponent,
    AdminPostComponent,
    ShareExpComponent,
    NhipcauComponent,
    NewsComponent,
    DetailComponent,
    DetailPostComponent,
    AddPostComponent,
    EditPostComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
