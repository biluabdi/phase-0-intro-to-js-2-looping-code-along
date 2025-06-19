// writeCards() — creates thank-you messages
function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// countDown() — counts down from a number to 0
function countDown(startNumber) {
  while (startNumber >= 0) {
    console.log(startNumber);
    startNumber--;
  }
}

// Test locally (optional):
// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
// countDown(10);

