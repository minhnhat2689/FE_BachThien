import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  //CÁC PHƯƠNG THỨC KHÁC
  xemProduct(): Observable<any>{
    return this.http.get<any>('https://backend-api-bachthien.onrender.com/xemProduct')
  }

  xemDanhMucSP(): Observable<any>{
    return this.http.get<any>('https://backend-api-bachthien.onrender.com/xemDanhmuc')
  }

  deleteProduct(_id: any): Observable<any>{
    return this.http.delete<any>('https://backend-api-bachthien.onrender.com/deleteProduct/' + _id)
  }

  addProduct(res: any): Observable<any>{
    return this.http.post<any>('https://backend-api-bachthien.onrender.com/productAdd', res)
  }

  updateProduct(_id: any, res: any): Observable<any>{
    return this.http.put<any>('https://backend-api-bachthien.onrender.com/updateProduct/' + _id , res)
  }

  getAP(_id: any): Observable<any>{
    return this.http.get<any>('https://backend-api-bachthien.onrender.com/getAP/' +_id)
  }
}
