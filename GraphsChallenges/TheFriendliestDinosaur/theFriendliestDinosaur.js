/*
Step 1: Initialize two variables: maxConnections to keep track of the highest number of friends found so far (start at -1), and friendliestIndex to remember the index of that dinosaur.

Step 2: Loop through the adjacencyList from start to finish. Let the current index be i.

Step 3: For each index i, check the length of adjacencyList[i]. This length represents the number of friends that dinosaur has.

Step 4: If this length is strictly greater than maxConnections:

- Update maxConnections to this new highest length.

- Update friendliestIndex to i.

Step 5: After checking all the dinosaurs, use friendliestIndex to look up and return the corresponding name from the dinosaurs array.

Time Complexity: O(V)
Space Complexity: O(1)

*/


export function theFriendliestDinosaur(dinosaurs, adjacencyList) {
  let maxConnections = -1;
  let friendliestIndex = -1;

  for (let i = 0; i < adjacencyList.length; i++) {
    const currentConnections = adjacencyList[i].length;
    
    if (currentConnections > maxConnections) {
      maxConnections = currentConnections;
      friendliestIndex = i;
    }
  }

  return dinosaurs[friendliestIndex];
}