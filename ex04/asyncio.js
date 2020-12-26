const fs = require("fs");

// fs.readFile(process.argv[2], "utf-8", (err, data) => {
// 	if (!err) console.log(data.split("\n").length - 1);
// });

const path = "test.txt";

console.log("(async) start");
fs.readFile(path, "utf-8", (err, data) => {
	if (!err) {
		console.log("(async) read file");
		console.log(data);
		ok = true;
	}
});

console.log("(async) end");
console.log("//////////////////////////////////");


console.log("start");
console.log("read file");


const data = fs.readFileSync(path, "utf-8");
console.log(data);
let ans = 0;
// for (let i = 0; i < data.length; i++) {
// 	const element = data[i];
// 	if (element == "\n") {
// 		ans++;
// 	}
// }
// console.log(ans);

console.log("end");
