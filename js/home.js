window.onload=function(){
	var cols=document.getElementsByClassName("col-xs-2")[0];
	var nav=document.getElementById("firstpane");
	cols.onclick=function(){
		if(nav.style.display!="block"){
			nav.style.display="block";
		}else{
			nav.style.display="none";
		}
	}
}
