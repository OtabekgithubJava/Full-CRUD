import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Create_User } from '../../models/create_user';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit{
  myId!:number;
  isUpdated:boolean=false;
  user:User={
  userId:0,
  fullName:"",
  email:"",
  role:""
  
  };
  setValue: Create_User={
    fullName:"",
    email:"",
    login:"64456",
    password:"4565464545654654dfsa",
    role:""
  };
  constructor(private crud:CrudService){}
  ngOnInit(): void {
  }
  getById(){
    this.crud.getById(this.myId).subscribe({
      next: (data)=> {
          this.user = data
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
  
  setUser(){
    this.crud.update(this.myId, this.setValue).subscribe({
      next:(data)=>{
        this.isUpdated=true
      }
    })
  }
}