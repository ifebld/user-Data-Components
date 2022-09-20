import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit {
  @Input() userDetails : any = {};
  @Input() index: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  //Edit form
  editform : any = {};

  openEditDialogue(userDetails:any){
    console.log(this.userDetails)
    //this.editform = Object.assign(user);
    this.editform = {...this.userDetails};
  }

  
    delete(userToDelete:any){
      (async() => {
        try{
          const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userToDelete.id}`);
            console.log(response);

           // this.getUsers();

           //Manual update
           let updatedUserList = this.userDetails.filter((user:any) => {
              if(user.id !== userToDelete.id){
                return user;
              }
           })

           this.userDetails = updatedUserList;
           
        } catch (error){
          console.log(error)
          }
        }
  )()};
  }


