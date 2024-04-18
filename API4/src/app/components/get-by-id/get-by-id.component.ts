import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.scss'
})
export class GetByIdComponent implements OnInit {
  myId!:number;
  user: User={
    userId: 0,
    fullName:"",
    email:"",
    role:""
    
  };
  constructor(private http:CrudService){
    this.getByid();
  }


  ngOnInit(): void {
    this.getByid();

  }
  getByid(){
    this.http.getById(this.myId).subscribe({
      next:(data)=>{
        this.user=data
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

}