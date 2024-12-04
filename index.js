// Function to find the year the team won the Superbowl
function superbowlWin(record) {
    // Use the find() method to locate the first object where result is "W"
    const winningRecord = record.find((game) => game.result === "W");
  
    // If a win is found, return the year; otherwise, return undefined
    return winningRecord ? winningRecord.year : undefined;
  }
  
  // Example Data for Testing
  const record = [
    { year: "2014", result: "L" },
    { year: "2015", result: "W" },
    { year: "2016", result: "L" },
  ];
  
  // Example Usage
  console.log(superbowlWin(record)); // Output: "2015"
  
  // Export the function (if required for testing in a separate test file)
  module.exports = superbowlWin;
  