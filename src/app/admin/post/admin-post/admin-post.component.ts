import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/common/app.component';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.scss']
})
export class AdminPostComponent implements OnInit {

  posts: any;

  constructor(private appComponent: AppComponent, private post: PostService) {
    appComponent.showHeaderFooter = false;
  }
  ngOnInit(): void {
    this.post.addViewPost().subscribe(res => {
      this.posts = res;
    })
  }


  onDelete(_id: string){
    if(confirm('Are you sure you want to delete this')){
    this.post.deletePost(_id).subscribe(res => {
      this.post.addViewPost().subscribe(res => {
        this.posts = res;
      })

    })
  }
  }
}
