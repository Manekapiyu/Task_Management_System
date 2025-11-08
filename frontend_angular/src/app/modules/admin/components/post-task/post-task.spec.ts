import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTask } from './post-task';

describe('PostTask', () => {
  let component: PostTask;
  let fixture: ComponentFixture<PostTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
