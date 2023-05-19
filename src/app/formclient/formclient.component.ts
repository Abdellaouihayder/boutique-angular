import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-formclient',
  templateUrl: './formclient.component.html',
  styleUrls: ['./formclient.component.scss']
})
export class FormclientComponent implements OnInit {
  user!:User;
  d=new Date();
  hid!:boolean;
  t:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.user=new User();
    this.hid=false;
  }
save(f: NgForm){
console.log(f.value['login']);
}
submit({value}:{value:User}){
this.user=value;
this.user.date=this.d;
console.log(this.user);
this.t.push(this.user);
this.hid=true;
}
}
