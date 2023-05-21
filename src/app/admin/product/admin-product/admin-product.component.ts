import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/common/app.component';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent  implements OnInit {

  products: any;
  danhmucs: any;

  constructor(private appComponent: AppComponent, private product: ProductService, private danhmuc: ProductService) {
    appComponent.showHeaderFooter = false;
  }

  ngOnInit(): void{
    this.product.xemProduct().subscribe(res => {
      this.products = res;
    })
    this.danhmuc.xemDanhMucSP().subscribe(res => {
      this.danhmucs = res;
    })
  }

  onDelete(_id: string){
    if(confirm('Are you sure you want to delete this')){
    this.product.deleteProduct(_id).subscribe(res => {
      this.product.xemProduct().subscribe(res => {
        this.products = res;
      })

    })
  }
  }
}
