import { Component, OnInit } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';
import { CreateService } from '../create/create.service';
import { ActivatedRoute, Router,Route } from "@angular/router";
import { Idata} from '../data';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  exportAs: 'NgForm'
})
export class AddComponent implements OnInit {

  title='Addelement'
  
  items: Idata | undefined 
  a:any
  id: any;
  uid:any;
  
  constructor(private router: Router, private ar: ActivatedRoute ,private createservice:CreateService) { }
  ngOnInit(): void {
         let uid =+this.ar.snapshot.params.get('uid') ;      
         this.items = this.createservice.getDetail(uid);
  }
  onSave(userForm:NgForm) {
    this.a=userForm.value
    console.log(this.a)
    this.createservice.add(this.a)    
    this.router.navigate(['/create']);
  }
  
}
