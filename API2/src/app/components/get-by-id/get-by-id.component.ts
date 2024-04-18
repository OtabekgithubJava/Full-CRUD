import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Create_User } from '../../models/createuser';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.scss'
})
export class GetByIdComponent implements OnInit {
  myId!: number;
  user: Create_User = {
    fullName: "",
    email: "",
    password: "",
    login: "",
    role: ""
  };

  constructor(private http : CrudService){
    this.getById();
  }

  ngOnInit(): void {

    this.getById();
  }

  getById(){
    this.http.getById(this.myId).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}