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
	
	
	
	
//地图部分
var myChart = echarts.init(document.getElementById('china-map'));
        var geoCoordMap = {
           "青岛": [120.33, 36.07],
           "临沂": [118.35, 35.05],
           "苏州": [120.62, 31.32]
        };

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push(geoCoord.concat(data[i].value));
                }
            }
            return res;
        };

        option = {
            backgroundColor: '#FFFFFF',
            title: {
                text: '',
                subtext: '',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
				formatter: function(params) {  
				//鼠标经过浮窗显示内容
					return params.data[2];
            }  
            },
            legend: {
                orient: 'vertical',
                top: 'bottom',
                left: 'right',
                data: [],
                textStyle: {
                    color: '#fff'
                },
            },
            visualMap: {
				show:false
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#ED6C00',
                        borderColor: '#FFEBDB'
                    },
                    emphasis: {
                        areaColor: '#FFC888'
                    }
                }
            },
            series: [
                {
                    name: '门店',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData([
                        { name: "苏州", value: "苏州百乐运体验店" },
                        { name: "青岛", value: "青岛百乐运体验店" },
                        { name: "临沂", value: "临沂百乐运体验店" }
                    ]),
                    symbolSize: 8,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            borderColor: '',
                            borderWidth: 1
                        }
                    }
                }
            ]
        }
        myChart.setOption(option);
		//地图点击事件
		myChart.on("click",function(data){
			if(data.name == "山东"){
				console.log("当前点击省份为"+data.name);
			}
			console.log(data.data[2]);
			console.log(data);
		});