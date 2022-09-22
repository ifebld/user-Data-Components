import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { EditformService } from '../editform.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  constructor(public editformService : EditformService) { }

  ngOnInit(): void {
  }

  saveNewEdit(){
    //rrun the put request
    (async () => {
      try {
        const response:any = await axios.put(`https://jsonplaceholder.typicode.com/users/${this.editformService.userToEdit.id}`, this.editformService.userToEdit);
        console.log(response);
    //equate the updated user to response 
        let updatedUser = response.data;

      // this.getUsers();

      //Manual update
      //map throught the available users to return updated user
        let newUserList = this.editformService.users.map((user: any) => {
          if (updatedUser.id == user.id) {
            return updatedUser;
          }else{
            return user;
          }
        });
        this.editformService.users = newUserList;
      }catch (error) {
        console.error(error);
      }
    })()
    }

}
