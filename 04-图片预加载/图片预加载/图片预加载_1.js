function loadImages(sources, callback){  
    var count = 0,  
        images ={},  
        imgNum = 0,
        showid = 1;  
    for(src in sources){  
        imgNum++;  
    }
	//alert(imgNum); //当前到的加载的图片数 
    for(src in sources){
        images[src] = new Image();  
        images[src].onload = function(){
            count++;
            if(count >= imgNum){  
              callback();  
            } 
        }  
        images[src].src = sources[src];
    }
}
	//loading页面的图片
	var sources = ["http://img03.taobaocdn.com/imgextra/i3/916243692/TB2bh3WdXXXXXacXpXXXXXXXXXX_!!916243692.jpg",
				"http://img02.taobaocdn.com/imgextra/i2/916243692/TB2T07OdXXXXXb3XpXXXXXXXXXX_!!916243692.png",
				"http://img03.taobaocdn.com/imgextra/i3/916243692/TB2vyA0dXXXXXXjXpXXXXXXXXXX_!!916243692.png",
				"http://img03.taobaocdn.com/imgextra/i3/916243692/TB2wJk7dXXXXXbTXXXXXXXXXXXX_!!916243692.png",
                "http://img03.taobaocdn.com/imgextra/i3/916243692/TB2MucPdXXXXXcrXpXXXXXXXXXX_!!916243692.png",
				"http://img04.taobaocdn.com/imgextra/i4/916243692/TB2k1UVdXXXXXXQXpXXXXXXXXXX_!!916243692.png",
                ];


    //调用图片预加载函数，实现回调函数  
   loadImages(sources, function(images){})