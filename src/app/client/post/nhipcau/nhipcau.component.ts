import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-nhipcau',
  templateUrl: './nhipcau.component.html',
  styleUrls: ['./nhipcau.component.scss']
})
export class NhipcauComponent implements OnInit {

  posts: any;

  constructor(private post: PostService){

  }




  ngOnInit(): void {
    this.post.addViewPost().subscribe(res =>{
      this.posts = res;
    })

  }

}

