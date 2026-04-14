/**
 * Clicks a button with the specified ID.
 * @param buttonId - The ID of the button to click.
 * @throws Will throw an error if the button is not found.
 */
export function clickButtonById(buttonId: string): void {
  const button = document.getElementById(buttonId);

  if (!button) {
    throw new Error(`Button with ID "${buttonId}" not found.`);
  }

  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`Element with ID "${buttonId}" is not a button.`);
  }

  button.click();
  console.log(`Button "${buttonId}" clicked successfully.`);
}

/**
 * Fills a text field with the specified text.
 * @param fieldId - The ID of the text field (input or textarea).
 * @param text - The text to fill into the field.
 * @throws Will throw an error if the field is not found or is not a text input.
 */
export function fillTextField(fieldId: string, text: string): void {
  const field = document.getElementById(fieldId);

  if (!field) {
    throw new Error(`Text field with ID "${fieldId}" not found.`);
  }

  if (
    !(field instanceof HTMLInputElement) &&
    !(field instanceof HTMLTextAreaElement)
  ) {
    throw new Error(`Element with ID "${fieldId}" is not a text field.`);
  }

  field.value = text;
  console.log(`Text field "${fieldId}" filled with: "${text}"`);
}
