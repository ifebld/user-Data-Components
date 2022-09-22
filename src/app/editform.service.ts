import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditformService {

  constructor() { }

  project_developer: String = "Ifeoluwa";
  users : Array<any> = [];
  userToEdit : any = {};
}
