// const http = require("http");

// const url = "https://developer.mozilla.org/ja/docs/Web/API/Event/Event/";

// http.get(url, (res) => {
// 	let body = "";
// 	res.setEncoding('utf-8');

// 	res.on()
// })


// request(
// 	"https://developer.mozilla.org/ja/docs/Web/API/Event/Event/",
// 	(error, response, body) => {
// 		// エラーチェック
// 		if (error !== null) {
// 			console.error("error:", error);
// 			return false;
// 		}

// 		// レスポンスコードとHTMLを表示
// 		console.log("statusCode:", response && response.statusCode);
// 		console.log("body:", body);
// 	}
// );

const https = require("https");
const req = https.request(
	"https://qiita.com/wakaba130/items/5f54aed913156dc4438f.json",
	(res) => {
		res.on("data", (chunk) => {
			console.log(chunk);
		});
		res.on("end", () => {
			console.log("JSONデータは以上です。");
		});
	}
);

req.on("error", (e) => {
	console.error(`エラーが出ました： ${e.message}`);
});

req.end();
