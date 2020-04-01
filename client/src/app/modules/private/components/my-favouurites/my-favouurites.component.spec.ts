import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavouuritesComponent } from './my-favouurites.component';

describe('MyFavouuritesComponent', () => {
  let component: MyFavouuritesComponent;
  let fixture: ComponentFixture<MyFavouuritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFavouuritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavouuritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
