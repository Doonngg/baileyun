/*窗口大小改变，切换图片路径*/
window.onload=function(){
   if(document.body.clientWidth<600){
   	/*手机版路径*/
   	$(".banner").attr("src","img/bannerm.png");
   } else{
   	/*电脑版路径*/
   	$(".banner").attr("src","img/banner1.png")
   }
}
window.onresize = function(){
	console.log(document.body.clientWidth);
	if(document.body.clientWidth<600){
		/*手机版路径*/
		$(".banner").attr("src","img/bannerm.png");
	} else{
		/*电脑版路径*/
		$(".banner").attr("src","img/banner1.png")
	}
}
//点击展开头部列表
$(".fold").click(function(){
	myAnimate(".fold-page", "100%", "height", "height .3s");
})
$(".fold-close").click(function(){
	myAnimate(".fold-page", "0", "height", "height .3s");
})


//css3动画封装
	function myAnimate(animateNode, animateEnd, animateStyle, animateTransition) {
		document.querySelector(animateNode).style.transition = animateTransition;
		document.querySelector(animateNode).style[animateStyle] = animateEnd;
	}