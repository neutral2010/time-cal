'user strict';

// 開始時刻を取得する
var startTime = null;
var displyArea = document.getElementById('display-area');

function start() {
	startTime = Date.now();
	console.log('スタートしました。')
	document.body.onkeydown = stop;
	console.log(startTime)
}

function stop() {
	console.log('勉強終わりました。')
// 終了時刻を取得
	var stopTime = Date.now();
	console.log (stopTime)
	var sumTime = stopTime - startTime;
	console.log(sumTime);
// 結果を表示
	displyArea.innerText = sumTime;
}
if (confirm('OKを押すと計測が始まります。<br> 終了時に何かキーを押してください。エンターキーは無効です。')) {
	start();
}

// 時間の表示（形式）

// ダイアログボックス内で改行できるか
