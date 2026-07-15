import { Stack } from './stack'


export function isValid(exp) {
  const stack = new Stack();

  for (let i = 0; i < exp.length; i++) {
    const char = exp[i];

    if (char === '<') {
      stack.push(char);
    } else if (char === '>') {
      if (stack.isEmpty()) {
        return false; // Found a closing bracket without an opening pair
      }
      stack.pop();
    }
  }

  // If the stack is empty, all brackets were matched perfectly.
  return stack.isEmpty();
}