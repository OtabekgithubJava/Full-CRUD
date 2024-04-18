import { Component } from '@angular/core';
import { Create_User } from '../../models/createuser';
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
isSubmitted:boolean=false;
constructor(private crud:CrudService){}
create(data:Create_User){
this.crud.create(data).subscribe({
  next: (res)=>{
    this.isSubmitted=true;
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