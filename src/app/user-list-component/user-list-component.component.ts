import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { EditformService } from '../editform.service';


@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit {
  //@ViewChild('childComponentTemplate') childComponentTemplate : TemplateRef<any> = "";
  @Input() userDetails : any = {};
  @Input() index: any = 0;
  @Output() deleteItem = new EventEmitter<any>();
  constructor(private editformService : EditformService) { };

  ngOnInit(): void {
  }
  //Edit form
  editform : any = {};
    openEditDialogue(userDetails:any){
      console.log(this.userDetails)
      //this.editform = Object.assign(user);
      this.editformService.userToEdit = {...this.userDetails};
    }
    deleteUser(){
      this.deleteItem.emit(this.userDetails)
    }
  }


