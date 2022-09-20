import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link-component',
  templateUrl: './nav-link-component.component.html',
  styleUrls: ['./nav-link-component.component.css']
})
export class NavLinkComponentComponent implements OnInit {
  @Input() navInfo : any = {}
  constructor() { }

  ngOnInit(): void {
  }

}
