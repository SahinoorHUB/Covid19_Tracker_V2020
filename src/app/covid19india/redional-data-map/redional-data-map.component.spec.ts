import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedionalDataMapComponent } from './redional-data-map.component';

describe('RedionalDataMapComponent', () => {
  let component: RedionalDataMapComponent;
  let fixture: ComponentFixture<RedionalDataMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedionalDataMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedionalDataMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
