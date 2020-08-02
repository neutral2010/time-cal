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
	var sumTime = (stopTime - startTime) / 60000;
	console.log(sumTime);
	console.log (Math.round(sumTime)) //小数点以下を四捨五入

// 結果を表示
	displyArea.innerText = 'お疲れ様！今の勉強時間は、' + Math.round(sumTime) + '分でした。\nもう一度計測する場合は、ページを再読み込み（リロード）してください。';
}
if ( confirm('OKを押すと計測が始まります。')) {
	start();
}

// ダイアログボックスじゃないようにしたい。
// 継続して見れるようにしたい。



