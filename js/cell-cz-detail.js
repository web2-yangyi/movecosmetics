window.onload=function(){
	var spans=cellRound.getElementsByTagName("span");
	var imgs=slidePic.getElementsByTagName("img");
	var imgWidth = slidePic.offsetWidth;
   var div=document.getElementById("slidePic");
	for(var i=0;i<spans.length;i++){
		spans[i].index=i;
		console.log(imgs[i])
		spans[i].onclick=function(){
			for(j=0;j<imgs.length;j++){
				imgs[j].style.display="none";
				spans[j].className="";
			}
		 
		  this.className="current";
		  imgs[this.index].style.display="block";
		  
		  animate(div,-this.index*imgWidth);

		}
	}
	
	 function animate(ele,target){
                clearInterval(ele.timer);
                var speed = target>ele.offsetLeft?10:-10;
                ele.timer = setInterval(function () {
                    var val = target - ele.offsetLeft;
                    ele.style.left = ele.offsetLeft + speed + "px";
                    if(Math.abs(val)<Math.abs(speed)){
                        ele.style.left = target + "px";
                        clearInterval(ele.timer);
                    }
                },10)
            }
	 
	 
	 
        
        
    var cols=document.getElementsByClassName("col-xs-2")[0];
	var nav=document.getElementById("firstpane");
	cols.onclick=function(){
		if(nav.style.display!="block"){
			nav.style.display="block";
		}else{
			nav.style.display="none";
		}
	}
	
	
	
	
	$(document).ready(function(){
	/*$("#firstpane .menu_body:eq(0)").show();*/
	$("#firstpane p.menu_head").click(function(){
		$(this).addClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().removeClass("current");
	});
	$("#secondpane .menu_body:eq(0)").show();
	$("#secondpane p.menu_head").mouseover(function(){
		$(this).addClass("current").next("div.menu_body").slideDown(500).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().removeClass("current");
	});
	
});
    
}


