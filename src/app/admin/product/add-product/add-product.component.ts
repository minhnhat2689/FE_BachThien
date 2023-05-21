import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/common/app.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  constructor(private appComponent: AppComponent, private product: ProductService) {
    appComponent.showHeaderFooter = false;
  }
  productFormCreate: FormGroup = new FormGroup  ({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    img: new FormControl(),

  });



  ngOnInit(): void {
  }

  onCreate(){
    this.product.addProduct(this.productFormCreate.value).subscribe(res => {
      console.log(this.productFormCreate.value);
    })

  }
}
