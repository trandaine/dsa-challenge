import { Queue } from './queue'

export function findFirstUniqueDinosaurAge(ages) {
  const queue = new Queue();
  const ageCounts = new Map();

  // Process the stream: enqueue ages and count their frequencies
  for (let i = 0; i < ages.length; i++) {
    const age = ages[i];
    queue.enqueue(age);
    ageCounts.set(age, (ageCounts.get(age) || 0) + 1);
  }

  // Find the first age that has a frequency of exactly 1
  while (!queue.isEmpty()) {
    const currentAge = queue.dequeue();
    
    if (ageCounts.get(currentAge) === 1) {
      return currentAge;
    }
  }

  return "No unique age was found.";
}