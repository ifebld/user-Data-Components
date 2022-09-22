import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import axios from 'axios'
import { EditformService } from '../editform.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  @Input() userList: Array<any> = []
  constructor(private editformService: EditformService) { }

  ngOnInit(): void {
    console.log(this.editformService.project_developer);
  }

  deleteUserSentFromChild(userFromChildEvent: any){
    console.log(userFromChildEvent);
      (async() => {
        try{
          const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userFromChildEvent.id}`);
            console.log(response);
           // this.getUsers();

           //Manual update
           let updatedUserList = this.userList.filter((userList:any) => {
              if(userList.id !== userFromChildEvent.id){
                return userList;
              }
           }) 
           this.userList = updatedUserList;
        } catch (error){
          console.log(error)
          }
        }
  )()};
}
