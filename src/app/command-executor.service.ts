import { Injectable } from '@angular/core';
import { Command, CommandResult } from './command.types';

@Injectable({
  providedIn: 'root',
})
export class CommandExecutorService {
  private log: Array<{ command: Command; result: CommandResult }> = [];

  execute(command: Command): CommandResult {
    let result: CommandResult;
    try {
      switch (command.type) {
        case 'SET_TITLE':
          document.title = command.payload;
          result = { success: true };
          break;
        case 'FILL_INPUT':
          const input = document.querySelector(command.selector) as HTMLInputElement;
          if (input) input.value = command.value;
          result = { success: !!input };
          break;
        case 'CLICK_BUTTON':
          const button = document.querySelector(command.selector) as HTMLElement;
          if (button) button.click();
          result = { success: !!button };
          break;
        case 'NAVIGATE_TO':
          // Simulate navigation for demo purposes
          console.log('Navigating to:', command.path);
          result = { success: true };
          break;
        default:
          throw new Error(`Unknown command: ${(command as Command).type}`);
      }
    } catch (error) {
      result = { success: false, message: error instanceof Error ? error.message : 'Unknown error' };
    }
    this.log.push({ command, result });
    return result;
  }

  getLog(): Array<{ command: Command; result: CommandResult }> {
    return this.log;
  }
}
