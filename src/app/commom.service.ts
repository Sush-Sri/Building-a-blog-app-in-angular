import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor(private http: HttpClient) { }
  async createBlog(data:any){
    const result=await this.http.post("",data)
  }
  updateBlog(){}
  async getAllBlog(){ 
    return await this.http.get("http://localhost:3000/posts") 
    

  }
  deleteUser(){}

}
 