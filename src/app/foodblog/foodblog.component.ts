import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CommomService } from '../commom.service';


@Component({
  selector: 'app-foodblog',
  templateUrl: './foodblog.component.html',
  styleUrls: ['./foodblog.component.css']

})
export class FoodblogComponent implements OnInit {

  constructor(private router:Router,private com:CommomService) { }


  ngOnInit(): void {
  }
  getinfo(){
    this.router.navigate(['/login']);
    

  }
  onSelect(){
    this.router.navigate(['/contact']);
  }
  

}
