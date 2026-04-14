import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { clickButtonById, fillTextField } from '../WebExecutor/Interactions';

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
        // if (!(element instanceof HTMLButtonElement)) {
        //   throw new Error(`Element with ID "${this.id}" is not a button.`);
        // }
        // element.click();
        console.log(`Button "${this.id}" clicked.`);
      } else if (this.action === 'fill-text') {
        fillTextField(this.id, this.payload);
        // if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLTextAreaElement)) {
        //   throw new Error(`Element with ID "${this.id}" is not a text field.`);
        // }
        // element.value = this.payload;
        // console.log(`Text field "${this.id}" filled with: "${this.payload}"`);
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'An error occurred.');
    }
  }
}
