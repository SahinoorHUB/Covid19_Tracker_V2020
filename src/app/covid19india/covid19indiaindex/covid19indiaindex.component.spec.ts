import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19indiaindexComponent } from './covid19indiaindex.component';

describe('Covid19indiaindexComponent', () => {
  let component: Covid19indiaindexComponent;
  let fixture: ComponentFixture<Covid19indiaindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19indiaindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19indiaindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
