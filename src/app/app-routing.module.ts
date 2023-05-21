import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangChuComponent } from './client/trang-chu/trang-chu.component';
import { ProductComponent } from './client/product/product.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminProductComponent } from './admin/product/admin-product/admin-product.component';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { AdminPostComponent } from './admin/post/admin-post/admin-post.component';
import { ShareExpComponent } from './client/post/share-exp/share-exp.component';
import { NhipcauComponent } from './client/post/nhipcau/nhipcau.component';
import { NewsComponent } from './client/post/news/news.component';
import { DetailComponent } from './client/product/detail/detail.component';
import { DetailPostComponent } from './client/post/detail-post/detail-post.component';
import { AddPostComponent } from './admin/post/add-post/add-post.component';
import { EditPostComponent } from './admin/post/edit-post/edit-post.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TrangChuComponent },
  { path: 'product', component: ProductComponent },
  { path: 'admin/login', component: LoginComponent},
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/product/admin-product', component: AdminProductComponent},
  { path: 'admin/product/add-product', component: AddProductComponent},
  { path: 'admin/product/edit-product/:_id', component: EditProductComponent},
  { path: 'admin/post/admin-post', component: AdminPostComponent},
  { path: 'admin/post/add-post', component: AddPostComponent},
  { path: 'admin/post/edit-post/:_id', component: EditPostComponent},
  { path: 'post/share-exp', component: ShareExpComponent},
  { path: 'post/nhipcau', component: NhipcauComponent},
  { path: 'post/news', component: NewsComponent},
  { path: 'product/detail/:_id', component: DetailComponent},
  { path: 'post/detail-post/:_id', component: DetailPostComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
