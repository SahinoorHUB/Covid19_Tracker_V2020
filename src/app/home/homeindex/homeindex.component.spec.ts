import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeindexComponent } from './homeindex.component';

describe('HomeindexComponent', () => {
  let component: HomeindexComponent;
  let fixture: ComponentFixture<HomeindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
