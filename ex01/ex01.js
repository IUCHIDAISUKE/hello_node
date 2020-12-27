let a = 42;
let b = "abcdef";
let c = undefined;
let d = { str: "test", num: 42 };

c = 100;

console.log(`value = ${a},              type = ${typeof a}`);
console.log(`value = ${b},          type = ${typeof b}`);
console.log(`value = ${c},       type = ${typeof c}`);
console.log(`value = ${d}, type = ${typeof d}`);


console.log(Object.prototype.toString.call(d))