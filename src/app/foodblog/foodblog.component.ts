import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { data } from 'jquery';
import { CommomService } from '../commom.service';
import {blogs} from '../constants/staticBlogs';
import { ReactiveFormsModule  } from '@angular/forms';


@Component({
  selector: 'app-foodblog',
  templateUrl: './foodblog.component.html',
  styleUrls: ['./foodblog.component.css']

})
export class FoodblogComponent implements OnInit {
  blogsData=blogs;

  constructor(private router:Router,private com:CommomService) { }

  
  


  ngOnInit(): void {
    // this.com.getAllBlog()
        // .subscribe(data =>  = data);

  }
  getinfo(){
    this.router.navigate(['/login']);
    

  }
  onSelect(){
    this.router.navigate(['/contact']);
  }
  

}
