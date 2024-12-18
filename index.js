function superbowlWin(record) {
    // Use find() to locate the first win ("W") and return the year
    const win = record.find(game => game.result === "W");
    
    // If a win is found, return the year, otherwise return undefined
    if (win) {
      return win.year;
    }
    return undefined;
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
  ];
  
  console.log(superbowlWin(record));  // Should print "2015"
  