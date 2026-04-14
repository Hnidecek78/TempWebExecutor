import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionExecutor } from './action-executor';

describe('ActionExecutor', () => {
  let component: ActionExecutor;
  let fixture: ComponentFixture<ActionExecutor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionExecutor],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionExecutor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
