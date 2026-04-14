import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { checkCheckboxById, clickButtonById, fillTextField } from '../WebExecutor/Interactions';

type ActionType = 'click-button' | 'fill-text';


@Component({
  selector: 'app-action-executor',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './action-executor.html',
  styleUrl: './action-executor.css',
})
export class ActionExecutor {
  action: ActionType = 'click-button';
  id: string = '';
  payload: string = '';

  executeAction(): void {
    const element = document.getElementById(this.id);
    if (!element) {
      alert(`Element with ID "${this.id}" not found.`);
      return;
    }

    try {
      if (this.action === 'click-button') {
        clickButtonById(this.id);
        console.log(`Button "${this.id}" clicked.`);
      } else if (this.action === 'fill-text') {
        fillTextField(this.id, this.payload);
        console.log(`Text field "${this.id}" filled with: "${this.payload}"`);
      } else if (this.action === 'check-checkbox') {
        checkCheckboxById(this.id);
        console.log(`Checkbox "${this.id}" checked.`);
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'An error occurred.');
    }
  }
}
