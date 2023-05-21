import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/common/app.component';
import { PostService } from 'src/app/services/post.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  _id:any;


  constructor(private appComponent: AppComponent, private post: PostService, private _router: ActivatedRoute) {
    appComponent.showHeaderFooter = false;
  }

  postFormEdit: FormGroup = new FormGroup  ({
    title: new FormControl(),
    date: new FormControl(),
    description: new FormControl(),
    doan1: new FormControl(),
    doan2: new FormControl(),
    doan3: new FormControl(),
    doan4: new FormControl(),
    doanket: new FormControl(),
    img: new FormControl(),


  });

  ngOnInit(): void {
    this._id = this._router.snapshot.params['_id'];

    this.post.getAPost(this._id).subscribe(res => {
      this.postFormEdit = new FormGroup  ({
        title: new FormControl(res.title),
        date: new FormControl(res.date),
        description: new FormControl(res.description),
        doan1: new FormControl(res.doan1),
        doan2: new FormControl(res.doan2),
        doan3: new FormControl(res.doan3),
        doan4: new FormControl(res.doan4),
        doanket: new FormControl(res.doanket),
        img: new FormControl(res.img),
          });
    })
  }

  onUpdate(){
    this.post.updatePost(this._id, this.postFormEdit.value).subscribe(res => {
      console.log(res);

    });
  }

}
