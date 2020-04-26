import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDataTableComponent } from './match-data-table.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

describe('MatchDataTableComponent', () => {
  let component: MatchDataTableComponent;
  let fixture: ComponentFixture<MatchDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatchDataTableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should render title in a h3 tag', () => {

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(
      'Table View');
  })


});
