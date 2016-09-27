window.onload = function(){
	
	var maindiv=document.getElementById("main");
	var  leftupdiv=document.getElementById("left-up");
	var  updiv=document.getElementById("up");
	var  rightupdiv=document.getElementById("right-up");
	var  rightdiv=document.getElementById("right");
	var  rightdowndiv=document.getElementById("right-down");
	var  downdiv=document.getElementById("down");
	var  leftdowndiv=document.getElementById("left-down");
	var  leftdiv=document.getElementById("left");
	
	var ifkeydown=false;
	var contact="";
	
	leftupdiv.onmousedown=function(e){
		keydown=true;
		contact="leftupdiv";
		}
	updiv.onmousedown=function(e){
		keydown=true;
		contact="updiv";
		}
	rightdiv.onmousedown=function(e){
		keydown=true;
		contact="rightdiv";
		}
	rightupdiv.onmousedown=function(e){
		keydown=true;
		contact="rightupdiv";
		}
	rightdowndiv.onmousedown=function(e){
		keydown=true;
		contact="rightdowndiv";
		}
	downdiv.onmousedown=function(e){
		keydown=true;
		contact="downdiv";
		}
	leftdowndiv.onmousedown=function(e){
		keydown=true;
		contact="leftdowndiv";
		}
	leftdiv.onmousedown=function(e){
		keydown=true;
		contact="leftdiv";
		}
		
	
	
	window.onmousemove = function(e){
		if(ifkeydown==ture){
			switch(contact){
				case "leftupdiv": leftupMove(e);break;
				case "uodiv": upMove(e) ;break;
				case "rightupdiv": rightupMove(e);break;
				case "rightdiv": rightMove(e);break;
				case "rightdowndiv": rightdownMove(e);break;
				case "downdiv": downMove(e);break;
				case "leftdowndiv": leftdownMove(e);break;
				case "leftdiv": leftMove(e);break;
				}
		var width = maindiv.offsetWidth;
		var height = maindiv.offsetHeight;
		setChoice();
			} 
	}
	
	
	
	
	
	
	function rightMove(e){
		var x=e.clientX;
		var widthbf=maindiv.offsetWidth-2;
		var addwidth=x-getposition(maindiv).left-widthbf;
		maindiv.style.width=widthbf+addwidth+"px";		
	}
	function leftMove(e){
		var x=e.clientX;
		var widthbf=maindiv.offsetWidth-2;
		var addwidth=getposition(maindiv).left-x;
		maindiv.style.width=widthbf+addwidth+"px";
		}
	function upMove(e){
		var y=e.clientY;
		var heightbf=maindiv.offsetHeight-2;
		var addheight=getposition(maindiv).left-y;
		maindiv.style.height=heightbf+addheight+"px";
		}
	function downMove(e){
		var y=e.clientY;
		var heightbf=maindiv.offsetHeight-2;
		var addheight=y-getposition(maindiv).left-heightbf;
		maindiv.style.height=heightbf+addheight+"px";
		}
	function leftupMove(e){ leftMove(e);upMove(e);}
	function rightupMove(e){rightMove(e);upMove(e);}
	function rightdownMove(e){rightMove(e);downMove(e);}
	function leftdownMove(e){leftMove(e);downMove(e);}
	
	function setChoice(){
		var top = mainDiv.offsetTop;
		var right = maindiv.offsetLeft + mainDiv.offsetWidth;
		var bottom = maindiv.offsetTop + mainDiv.offsetHeight;
		var left = maindiv.offsetLeft;
		document.getElementById("img2").style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)";
		prev({"top":top,"right":right,"bottom":bottom,"left":left});
	}
	function getPosition(node){
		var top = node.offsetTop;
		var left = node.offsetLeft;
		while(node.offsetParent!=null){
			left+=node.offsetParent.offsetLeft;
			top+=node.offsetParent.offsetTop;
			node = node.offsetParent;
			}
		return{"left":left, "top":top};
		
		}
	
	}