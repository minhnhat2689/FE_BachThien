import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) { }


  //CÁC PHƯƠNG THỨC KHÁC
  addViewPost(): Observable<any>{
    return this.http.get<any>('https://backend-api-bachthien.onrender.com/viewpost')
  }
  add1ViewPost(_id: any): Observable<any>{
    return this.http.get<any>('https://backend-api-bachthien.onrender.com/view1post/' +_id)
  }

  addPost(res: any): Observable<any>{
    return this.http.post<any>('https://backend-api-bachthien.onrender.com/post', res)
  }


  deletePost(_id: any): Observable<any>{
    return this.http.delete<any>('https://backend-api-bachthien.onrender.com/delete-post/' + _id)
  }


  updatePost(_id: any, res: any): Observable<any>{
    return this.http.put<any>('https://backend-api-bachthien.onrender.com/update-post/' + _id , res)
  }

  getAPost(_id: any): Observable<any>{
    return this.http.get<any>('https://backend-api-bachthien.onrender.com/getAPost/' +_id)
  }
}
