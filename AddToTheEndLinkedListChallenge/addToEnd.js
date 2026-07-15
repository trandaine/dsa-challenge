import { Node } from './node'

/*
Algorithm: Add to the End using the Tail
Input: head pointer, tail pointer, and the value to add
Output: head pointer

Steps:
1. Create a new node for the value.
2. If the list is empty:
3.   Just have the head point to the new node.
4. Else:
5.   Link the tail node to the new node.
6. Return the head.
*/

// Part 1:
export function addToEndUsingTail(head, tail, value) {
  const node = new Node(value)
  if (head === null) {
    head = node
  } else {
    tail.next = node
  }
  return head
}

/*
Algorithm: Add to the End using the Head
Input: head pointer, and the value to add
Output: head pointer

Steps:
1. Init a tail pointer pointing to the head.
2. If the list is not empty:
3.   While tail is not the last node in the list:
4.     Move the tail to the next node.
5. Now that you have the tail pointing to the last node in the list, just add to the end of the list using the tail and return the resulting head.
*/

// Part 2:
export function addToEndUsingHead(head, value) {
  let tail = head
  if (head !== null) {
    while (tail.next !== null) {
      tail = tail.next
    }
  }
  return addToEndUsingTail(head, tail, value)
}