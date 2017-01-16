var res = 0;
var slider = {
	right: function(){
		var right = -504;
	res += right;
	if(res < -1008){
		res = 0;
	}
	document.getElementById("src").style.marginLeft = res + "px";
	},
	left: function(){
			var left = 504;
	res += left;
	if(res > 0){
		res = -1008;	
	}
	document.getElementById("src").style.marginLeft = res + "px";
	console.log(res);
	}
};