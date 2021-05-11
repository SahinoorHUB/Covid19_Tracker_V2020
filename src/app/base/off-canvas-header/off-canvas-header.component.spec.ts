import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCanvasHeaderComponent } from './off-canvas-header.component';

describe('OffCanvasHeaderComponent', () => {
  let component: OffCanvasHeaderComponent;
  let fixture: ComponentFixture<OffCanvasHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffCanvasHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffCanvasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
