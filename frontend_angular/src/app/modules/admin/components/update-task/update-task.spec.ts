import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTask } from './update-task';

describe('UpdateTask', () => {
  let component: UpdateTask;
  let fixture: ComponentFixture<UpdateTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
