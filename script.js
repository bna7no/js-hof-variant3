console.log("Практична робота 8");
console.log("Варіант 3 — Collection Utilities");

const users = [
  { name: "Nikita", age: 17, group: "A", score: 85 },
  { name: "Anna", age: 18, group: "B", score: 92 },
  { name: "Oleg", age: 17, group: "A", score: 76 },
  { name: "Maria", age: 19, group: "B", score: 88 },
  { name: "Ivan", age: 18, group: "C", score: 70 },
  { name: "Anna", age: 18, group: "B", score: 92 }
];

const groupBy = (arr, key) => {
  return arr.reduce((result, item) => {
    const groupKey = item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
    return result;
  }, {});
};

const sortBy = (arr, key, direction = "asc") => {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) {
      return direction === "asc" ? -1 : 1;
    }

    if (a[key] > b[key]) {
      return direction === "asc" ? 1 : -1;
    }

    return 0;
  });
};

const partition = (arr, predicate) => {
  return arr.reduce(
    (result, item) => {
      if (predicate(item)) {
        result[0].push(item);
      } else {
        result[1].push(item);
      }

      return result;
    },
    [[], []]
  );
};

const pluck = (arr, key) => {
  return arr.map(item => item[key]);
};

const uniqBy = (arr, key) => {
  const seen = new Set();

  return arr.filter(item => {
    const value = item[key];

    if (seen.has(value)) {
      return false;
    }

    seen.add(value);
    return true;
  });
};

console.log("groupBy group:", groupBy(users, "group"));
console.log("sortBy score desc:", sortBy(users, "score", "desc"));
console.log("partition score >= 80:", partition(users, user => user.score >= 80));
console.log("pluck names:", pluck(users, "name"));
console.log("uniqBy name:", uniqBy(users, "name"));