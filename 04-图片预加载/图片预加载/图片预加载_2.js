// JavaScript Document  
    
/* 当页面加载完后隐藏loading */
document.onreadystatechange = loading;
        function loading(){
            if(document.readyState == "complete") { 
            //存储图片链接信息的关联数组  
            var sources = ["head_bg_1.png","head_bg_2.png","head_bg_3.png","head_bg_4.png","head_bg_5.png","head_bg_6.png",
                          "head_bg_7.png","head_bg_8.png","head_bg_9.png","head_bg_10.png","head_bg_11.png","head_bg_12.png",
                          "head_bg_13.png","head_bg_14.png","head_bg_15.png","head_bg_16.png","head_bg_17.png","head_bg_18.png",
                          "head_bg_19.png","head_bg_20.png"
                          ];

            //调用图片预加载函数，实现回调函数  
             loadImages(sources, function(images){
			 
                //$('.percent').html('100%');
                //$('#circlegreen10').show();
                /* 当页面加载完后隐藏loading */
                setTimeout(function(){
                  $(".loading").hide();
                },400);
             }); 
            //$('.BonusRecord').hide();
            //$('.zhezhao_over').hide();
        }};

//实现一系列图片的预加载  
//参数sources:图片信息关联数组  
//参数callback:回调函数——图片预加载完成后立即执行此函数。  
function loadImages(sources, callback){  
    var count = 0,  
        images ={},  
        imgNum = 0,
        showid = 1;  
    for(src in sources){  
        imgNum++;  
    }
    //alert(imgNum);  
    for(src in sources){
        

        images[src] = new Image();  
        images[src].onload = function(){
            count++;
            // if(count>showid*10){
            //   $('#circlegreen'+showid).show();
            //   showid++;
            // }
            // if(count<=100){
            //   $('.percent').html(count+'%');
            // }
            if(count >= imgNum){  
              callback();
            } 
        }  
        images[src].src = 'http://fabu.dota.weibohe.com.cn/mlzm/'+sources[src];
        //alert(sources[src]);
    }
}

