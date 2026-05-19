function assertEqual(actual, expected, testName) {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);

  if (passed) {
    console.log("✅ " + testName + " passed");
  } else {
    console.error("❌ " + testName + " failed");
    console.log("Expected:", expected);
    console.log("Actual:", actual);
  }
}

assertEqual(Object.keys(groupBy(users, "group")).length, 3, "groupBy groups count");

assertEqual(sortBy(users, "score", "desc")[0].score, 92, "sortBy score desc");

assertEqual(partition(users, user => user.score >= 80)[0].length, 4, "partition high score");

assertEqual(pluck(users, "name")[0], "Nikita", "pluck first name");

assertEqual(uniqBy(users, "name").length, 5, "uniqBy name");