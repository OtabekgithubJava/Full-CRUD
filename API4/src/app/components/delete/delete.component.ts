import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  myId!:number;
  isDeleted:boolean=false;
  // mes:Message={
  //   mes:"",
  // }
  constructor(private crud:CrudService){}

  deletes(myId:number){
    this.crud.delete(myId).subscribe({
      next:(data)=>{
        // this.mes=data;
        this.isDeleted=true;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  delete(){
    this.deletes(this.myId);
  }
}