import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Route } from "@angular/router";
import { CreateService } from '../create/create.service';
import { Idata} from '../data';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  title='update'
  items:Idata | any;
  id:any;
  uid:any;
  constructor(private router: Router, private aroute: ActivatedRoute ,private createservice:CreateService) { }
  ngOnInit(): void {
         let uid:any = +this.aroute.snapshot.params.get("uid")  ;      
         this.items = this.createservice.getDetail(uid);
  }
  onSave(userForm:NgForm) {
    this.createservice.update(this.id, this.items);
    console.log(this.items)
    this.router.navigate(['/create']);
  }

}