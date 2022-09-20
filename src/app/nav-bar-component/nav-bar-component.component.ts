import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.css']
})
export class NavBarComponentComponent implements OnInit {
  @Input() navLinks : Array<any> =[]
  constructor() { }

  ngOnInit(): void {
  }

}
