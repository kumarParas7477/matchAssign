import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDataTableComponent } from './match-data-table.component';

describe('MatchDataTableComponent', () => {
  let component: MatchDataTableComponent;
  let fixture: ComponentFixture<MatchDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
