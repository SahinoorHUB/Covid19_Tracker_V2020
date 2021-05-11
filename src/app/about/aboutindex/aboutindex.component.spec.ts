import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutindexComponent } from './aboutindex.component';

describe('AboutindexComponent', () => {
  let component: AboutindexComponent;
  let fixture: ComponentFixture<AboutindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
