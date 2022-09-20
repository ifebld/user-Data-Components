import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkComponentComponent } from './nav-link-component.component';

describe('NavLinkComponentComponent', () => {
  let component: NavLinkComponentComponent;
  let fixture: ComponentFixture<NavLinkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLinkComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLinkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
