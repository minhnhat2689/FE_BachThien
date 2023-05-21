import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/common/app.component';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  constructor(private appComponent: AppComponent, private post: PostService) {
    appComponent.showHeaderFooter = false;
  }
  postFormCreate: FormGroup = new FormGroup  ({
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
    throw new Error('Method not implemented.');
  }

  onCreate(){
    this.post.addPost(this.postFormCreate.value).subscribe(res => {
      console.log(this.postFormCreate.value);
    })

  }
}
