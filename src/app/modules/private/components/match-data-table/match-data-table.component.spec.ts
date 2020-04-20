import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDataTableComponent } from './match-data-table.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

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



  it('should render title in a h1 tag', () => {

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Table View');
  })


});
