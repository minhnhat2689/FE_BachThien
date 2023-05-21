import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {

  _id:any;
  posts:any;


  constructor(private _router:ActivatedRoute,  private post: PostService){

  }

  ngOnInit(): void {
    this._id = this._router.snapshot.params['_id'];

    this.post.add1ViewPost(this._id).subscribe(res => {
      this.posts = res;
    })
  }
}
