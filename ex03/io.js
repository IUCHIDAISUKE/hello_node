const fs = require("fs");

try {
	const data = fs.readFileSync(process.argv[2], "utf-8");
	let ans = 0;
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		if (element == "\n") {
			ans++;
		}
	}
	console.log(ans);
} catch {
}
