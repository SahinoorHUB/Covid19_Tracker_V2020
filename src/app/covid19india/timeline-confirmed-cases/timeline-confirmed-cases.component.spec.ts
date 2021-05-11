import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineConfirmedCasesComponent } from './timeline-confirmed-cases.component';

describe('TimelineConfirmedCasesComponent', () => {
  let component: TimelineConfirmedCasesComponent;
  let fixture: ComponentFixture<TimelineConfirmedCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineConfirmedCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineConfirmedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
