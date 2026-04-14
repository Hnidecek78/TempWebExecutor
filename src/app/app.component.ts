import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommandExecutorService } from './command-executor.service';
import {ActionExecutor} from './action-executor/action-executor';
import { TestComponent } from './test-component/test-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ActionExecutor, TestComponent],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('userInput') userInput!: ElementRef;

  constructor(private executor: CommandExecutorService) {}

  ngAfterViewInit(): void {
    // Example commands
    this.executor.execute({ type: 'SET_TITLE', payload: 'Angular Command Test' });
    this.executor.execute({ type: 'FILL_INPUT', selector: '#userInput', value: 'Hello, Angular!' });
  }
}
