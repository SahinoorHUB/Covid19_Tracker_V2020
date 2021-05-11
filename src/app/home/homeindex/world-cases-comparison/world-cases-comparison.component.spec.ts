import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCasesComparisonComponent } from './world-cases-comparison.component';

describe('WorldCasesComparisonComponent', () => {
  let component: WorldCasesComparisonComponent;
  let fixture: ComponentFixture<WorldCasesComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldCasesComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldCasesComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
