// export function tagSumLottery(communications, lotteryNumber) {
//   const winners = []
//   for (let i = 0; i < communications.length; i++) {
//     for (let j = i + 1; j < communications.length; j++) {
//       if (communications[i].tag + communications[j].tag === lotteryNumber) {
//         winners.push([communications[i].name, communications[j].name].toSorted())
//       }
//     }
//   }
//   if (winners.length > 0) {
//     return winners
//   }
//   return "No winners"
// }


export function tagSumLottery(communications, lotteryNumber) {
  const winners = [];
  const seenTags = new Map();

  for (let i = 0; i < communications.length; i++) {
    const currentComm = communications[i];
    const complement = lotteryNumber - currentComm.tag;

    // Check if the complement exists in our map
    if (seenTags.has(complement)) {
      const matchName = seenTags.get(complement);
      
      // Sort the two names alphabetically and push to winners
      if (currentComm.name < matchName) {
        winners.push([currentComm.name, matchName]);
      } else {
        winners.push([matchName, currentComm.name]);
      }
    }

    // Add the current tag and name to the map for future checks
    seenTags.set(currentComm.tag, currentComm.name);
  }

  return winners.length > 0 ? winners : "No winners";
}