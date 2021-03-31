import { Component, OnInit } from '@angular/core';
import { Idata } from '../data';
import { CreateService } from './create.service';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  items: Idata[] | undefined;
  uid: any
  detail: Idata | undefined;
  ide: number | undefined;
  display: boolean = false;
  //injecting
  constructor(private router: Router, private aroute: ActivatedRoute, private createservice: CreateService) { }
  //intializing

  ngOnInit(): void {
    this.items = this.createservice.getDetails()



    let uid: any = this.aroute.snapshot.paramMap.get('uid');
    this.detail = this.createservice.getDetail(uid);
  }


  // onDelete(id: number) {
  //   window.confirm("Are you  sure you want to delete");
  //   this.createservice.delete(id);

  // }






}