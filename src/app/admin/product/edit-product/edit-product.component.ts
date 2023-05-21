import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/common/app.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  _id: any;

  constructor(private appComponent: AppComponent, private product: ProductService, private _router: ActivatedRoute) {
    appComponent.showHeaderFooter = false;
  }

  productFormEdit: FormGroup = new FormGroup  ({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    img: new FormControl(),

  });

  ngOnInit(): void {
    this._id = this._router.snapshot.params['_id'];

    this.product.getAP(this._id).subscribe(res => {
      this.productFormEdit = new FormGroup  ({
        name: new FormControl(res.name),
        price: new FormControl(res.price),
        description: new FormControl(res.description),
        img: new FormControl(res.img),

      });
    })
  }

  onUpdate(){
    this.product.updateProduct(this._id, this.productFormEdit.value).subscribe(res => {
      console.log(res);

    });
  }
}
