import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  posts: any;

  constructor(private post: PostService){

  }




  ngOnInit(): void {
    this.post.addViewPost().subscribe(res =>{
      this.posts = res;
    })

  }

}

