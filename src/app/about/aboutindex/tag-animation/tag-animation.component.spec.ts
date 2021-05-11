import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagAnimationComponent } from './tag-animation.component';

describe('TagAnimationComponent', () => {
  let component: TagAnimationComponent;
  let fixture: ComponentFixture<TagAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
