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
  it('should be able to add a whole number and a zero', () => {
    expect( this.getDate('2020-04-05T05:00:00.000+0000')).toEqual('05-04-2020');
  });
});
