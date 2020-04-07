import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldMatchComponent } from './old-match.component';

describe('OldMatchComponent', () => {
  let component: OldMatchComponent;
  let fixture: ComponentFixture<OldMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
