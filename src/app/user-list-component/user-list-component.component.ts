import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit {
  @Input() userDetails : any = {};
  @Input() index: any = 0;
  @Output() deleteItem = new EventEmitter<any>();
  constructor() { };

  ngOnInit(): void {
  }

  //Edit form
  editform : any = {};

  openEditDialogue(userDetails:any){
    console.log(this.userDetails)
    //this.editform = Object.assign(user);
    this.editform = {...this.userDetails};
  }

  deleteUser(){
    this.deleteItem.emit(this.userDetails)
  }
   
  }


