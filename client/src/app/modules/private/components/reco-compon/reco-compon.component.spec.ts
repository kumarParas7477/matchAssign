import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoComponComponent } from './reco-compon.component';

describe('RecoComponComponent', () => {
  let component: RecoComponComponent;
  let fixture: ComponentFixture<RecoComponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoComponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoComponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
