import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCompletedListComponent } from './todo-completed-list.component';

describe('TodoCompletedListComponent', () => {
  let component: TodoCompletedListComponent;
  let fixture: ComponentFixture<TodoCompletedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCompletedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCompletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
