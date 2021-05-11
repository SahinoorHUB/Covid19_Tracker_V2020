import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedionalDataComponent } from './redional-data.component';

describe('RedionalDataComponent', () => {
  let component: RedionalDataComponent;
  let fixture: ComponentFixture<RedionalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedionalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
