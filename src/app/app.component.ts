import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-data-update';
  
  name="";
  username="";
  email="";
  type="";
  city="";

  users:any = [];

  ngOnInit(){
    this.getUsers();
  }

  editform : any = {};

  links=[
    {
      name:"W3Schools",
      url:"www.w3Schools.com"
    },
    {
      name:"Google",
      url:"www.google.com"
    },
    {
      name:"YouTube",
      url:"www.Youtube.com"
    }
  ]

  submit(){
    
    (async () => {
       try {
         const response = await axios.post('https://jsonplaceholder.typicode.com/users',{
           name : this.name,
             username : this.username,
             email: this.email,
             type: this.type,
             city: this.city
         });
         console.log(response);
         //this.getUsers();
 
         //Manual update
         this.users.push(response.data);
       }catch (error) {
         console.error(error);
       }
     })()
   }



  getUsers =  async  () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response);
      this.users = response.data;
    } catch (error) {
      console.error(error);
    }
  }

  saveNewEdit(){
    //rrun the put request
    (async () => {
      try {
        const response:any = await axios.put(`https://jsonplaceholder.typicode.com/users/${this.editform.id}`);
        console.log(response);
    //equate the updated user to response 
        let updatedUser = response.data;

      // this.getUsers();

      //Manual update
      //map throught the available users to return updated user
        let newUserList = this.users.map((user: any) => {
          if (updatedUser.id == user.id) {
            return updatedUser;
          }else{
            return user;
          }
        });

        this.users = newUserList;
   
      }catch (error) {
        console.error(error);
      }
    })()
 
    }
}

