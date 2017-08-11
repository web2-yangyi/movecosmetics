window.onload=function(){
var inputs=document.getElementsByTagName("input");
var ulArr=product.getElementsByTagName("ul");
for (var i=0;i<inputs.length;i++) {
	      inputs[i].index = i;
	inputs[i].onclick=function(){		
		      for(var j=0;j<ulArr.length;j++){
                  ulArr[j].style.display = "none";
                   
                }
		     
		ulArr[this.index].style.display="block";
		
	  }
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