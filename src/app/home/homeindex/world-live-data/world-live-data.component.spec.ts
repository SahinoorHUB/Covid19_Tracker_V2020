import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldLiveDataComponent } from './world-live-data.component';

describe('WorldLiveDataComponent', () => {
  let component: WorldLiveDataComponent;
  let fixture: ComponentFixture<WorldLiveDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldLiveDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldLiveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
