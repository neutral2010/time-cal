'use strict';

{
	// 要素を取得
	const timer = document.getElementById('timer');
	const start = document.getElementById('start');
	const stop = document.getElementById('stop');
	const reset = document.getElementById('reset');

	// 再代入される変数の定義（関数外でも使うもの）
	let startTime;
	let timeoutId; /* timeout用のId seTimeoutの戻り値として取得できる */
	let elapsedTime = 0; /* タイマーが走っていた時間 */

	// カウントアップの定義
	function countUp () {
		// 始まり（startTime）からの経過時間
		// console.log(Date.now() - startTime);

		// 時間表示を分かりやすくするためのDateオブジェクトを変数に代入
		const d = new Date(Date.now() - startTime + elapsedTime);	
		const h = String(d.getMinutes()).padStart(2, '0');
		const m = String(d.getMinutes()).padStart(2, '0');
		const s = String(d.getSeconds()).padStart(2, '0');
		// const ms = String(d.getMilliseconds()).padStart(3, '0');
		timer.textContent = `${h}:${m}:${s}`;

		// 始まり（startTime）からの経過時間取得を10秒ごとに繰り返す
		timeoutId = setTimeout(( ) => {
			countUp();
		}, 10);
	}

	// ボタンを最初の状態(スタートボタンのみ有効）にセットする関数
	function setBottonStateInutual() {
		start.classList.remove('inactive');
		stop.classList.add('inactive');
		reset.classList.add('inactive');
	}

	// ストップボタンのみ有効にセットする関数(classの追加・削除によって実装)
	function setBottonStaterunning() {
		start.classList.add('inactive');
		stop.classList.remove('inactive');
		reset.classList.add('inactive');
	}

	// スタートボタンとリセットボタンが有効にセットする関数
	function setBottonStatestopped() {
		start.classList.remove('inactive');
		stop.classList.add('inactive');
		reset.classList.remove('inactive');
	}

	// ページ読み込み時点で呼び出す
	setBottonStateInutual();

	// スタートボタンを押した時
	start.addEventListener('click', () => {
		if (start.classList.contains('inactive') === true) {
			return;
		}
		setBottonStaterunning();
		startTime = Date.now();
		countUp();
	});

	// ストップボタンを押した時
	stop.addEventListener('click', () => {
		if (stop.classList.contains('inactive') === true) {
			return;
		}
		setBottonStatestopped();
		// 次のsetTimeoutがキャンセルになる
		clearTimeout(timeoutId);
		// ストップをクリックした時間はDate.now()で取得できる。
		elapsedTime += Date.now( ) - startTime;	

	});

	// リセットボタンを押した時
	reset.addEventListener('click', () => {
		if (reset.classList.contains('inactive') === true) {
			return;
		}
		setBottonStateInutual();
		timer.textContent = '00:00:00';
		elapsedTime = 0;
	});
}