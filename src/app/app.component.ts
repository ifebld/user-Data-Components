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
}

