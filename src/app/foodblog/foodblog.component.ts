import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { data } from 'jquery';
import { CommomService } from '../commom.service';
import { blogs } from '../constants/staticBlogs';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../crud/crud.service';
import {Idata} from '../data';


@Component({
  selector: 'app-foodblog',
  templateUrl: './foodblog.component.html',
  styleUrls: ['./foodblog.component.css']

})
export class FoodblogComponent implements OnInit {
  blogsData = blogs;
  products: Idata[] = [];

  constructor(private router: Router, private com: CommomService, public crudService: CrudService) { }





  ngOnInit(): void {
    // this.com.getAllBlog()
    // .subscribe(data =>  = data);
    this.crudService.getAll().subscribe((data: Idata[]) => {
      console.log(data);
      this.products = data;

    })
  }
  getinfo(){
    this.router.navigate(['/login']);


    }
  onSelect(){
    this.router.navigate(['/contact']);
    }
  editBlog(event:any){
    console.log(event)
    // this.crudService.update(event)

  }
  deleteBlog(event:any){
    console.log(event)
    this.crudService.delete(event)

  }
  

}
