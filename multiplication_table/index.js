function multTable() {
	document.getElementById("demo").innerHTML = ""
	for(var i=1; i<10; i++){
		var result = "";
		for(var j=1; j<=i; j++){
			var add = i+"*"+j+"="+(i*j)+" ";
			result += add;
		}
		console.log(result)
	}
    document.getElementById("demo").innerHTML = "function multTable() executed successfully. Check console log";
}