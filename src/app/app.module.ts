import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { NavLinkComponentComponent } from './nav-link-component/nav-link-component.component';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { FormsModule } from '@angular/forms';
import { EditformService } from './editform.service';
import { EditModalComponent } from './edit-modal/edit-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    NavLinkComponentComponent,
    UserListComponentComponent,
    UserComponentComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EditformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
