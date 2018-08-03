let imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let ord = 0; //表示下标
let myTimer = null;

function initUI() {
	$(".box img").slice(1).css({
		"left": "-1920px"
	});
}

function changeImg() {
	myTimer = setInterval(function () {
		let outOrd = ord;
		ord = ord + 1;
		showImg(outOrd, ord);
	}, 3000);
}

function showImg(outOrd, transOrd) {
	ord = transOrd;
	if (ord > imgs.length - 1) {
		ord = 0
	} else if (ord < 0) {
		ord = imgs.length - 1
	}

	fadeInOut(outOrd, ord);
}
//淡入淡出效果
function fadeInOut(outOrd, inOrd) { //2,4
	if (outOrd == inOrd) {
		return;
	}
	console.log(outOrd);
	console.log(inOrd);
	$(".box img").eq(outOrd).css({
		"left": "0px"
	});

	$(".box img").eq(inOrd).css({
		"left": "1920px"
	});

	$(".box img").eq(outOrd).animate({
		"left": "-1920px"
	}, 1000);

	$(".box img").eq(inOrd).animate({
		"left": "-0px"
	}, 1000);
};
$(function () {
	initUI();
	changeImg();

	$(".box").mousemove(function () {
		clearInterval(myTimer);
	});
	$(".box").mouseout(function () {
		changeImg();
	});
})