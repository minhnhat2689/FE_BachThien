import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-share-exp',
  templateUrl: './share-exp.component.html',
  styleUrls: ['./share-exp.component.scss']
})
export class ShareExpComponent implements OnInit {

  posts: any;

  constructor(private post: PostService){

  }




  ngOnInit(): void {
    this.post.addViewPost().subscribe(res =>{
      this.posts = res;
    })

  }

}
