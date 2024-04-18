import { Component } from '@angular/core';
import { Create_User } from '../../models/create_user';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
setValue:Create_User={
  fullName:"",
  email:"",
  login:"",
  password:"",
  role:""

}
resultdata! : Create_User;
isSubmited:boolean=false;
constructor(private crud:CrudService){}
create(data:Create_User){
this.crud.create(data).subscribe({
  next: (res)=>{
    this.resultdata=res;
    this.isSubmited=true;
  },
  error: (err)=>{
    console.log(err);
  }
});
}
start(){
  this.create(this.setValue);
}
}