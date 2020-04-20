import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavouuritesComponent } from './my-favouurites.component';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
describe('MyFavouuritesComponent', () => {
  let component: MyFavouuritesComponent;
  let fixture: ComponentFixture<MyFavouuritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyFavouuritesComponent],
      imports: [HttpClient],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavouuritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should be able to convert to appropriate date', () => {
    const fixture = TestBed.createComponent(MyFavouuritesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(this.getDate('2020-04-05T05:00:00.000+0000')).toEqual('05-04-2020');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MyFavouuritesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Favourites');
  })
});
