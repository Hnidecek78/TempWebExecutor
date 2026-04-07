export type Command =
  | { type: 'SET_TITLE'; payload: string }
  | { type: 'FILL_INPUT'; selector: string; value: string }
  | { type: 'CLICK_BUTTON'; selector: string }
  | { type: 'NAVIGATE_TO'; path: string };

export interface CommandResult {
  success: boolean;
  message?: string;
}
