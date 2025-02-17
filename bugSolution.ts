function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    return 0; // Or handle the error appropriately
  }
}

let result1 = addSafe(1, 2); // Correct
let result2 = addSafe("1", 2); // Safe handling of incorrect type
let result3 = addSafe(1, "2"); // Safe handling of incorrect type

console.log(result1); // 3
console.log(result2); // 0
console.log(result3); // 0