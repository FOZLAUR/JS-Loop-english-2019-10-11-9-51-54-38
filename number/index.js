function oddEven() {
	document.getElementById("demo").innerHTML = ""
	for(var i=1; i<21; i++){
		if (i%2 == 0){
			console.log(i+" is an even number");
		} else {
			console.log(i+" is an odd number");
		}
	}
    document.getElementById("demo").innerHTML = "function oddEven() executed successfully. Check console log";
}