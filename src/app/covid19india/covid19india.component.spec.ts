import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19indiaComponent } from './covid19india.component';

describe('Covid19indiaComponent', () => {
  let component: Covid19indiaComponent;
  let fixture: ComponentFixture<Covid19indiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19indiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19indiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
