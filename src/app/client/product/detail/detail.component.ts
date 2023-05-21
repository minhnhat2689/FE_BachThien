import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  _id:any;
  products:any;

  constructor(private _router:ActivatedRoute,  private product: ProductService){

  }

  ngOnInit(): void {
    this._id = this._router.snapshot.params['_id'];

    this.product.getAP(this._id).subscribe(res => {
      this.products = res;
    })
  }

}
