function myFunction(){
	var x = prompt('Please enter a number', ''); 

	x = parseInt(x, 10);
	
	if(isNaN(x)){
		alert('Invalid Number')

		return;
	}

	//get response and write up to user specified number
	var output= '';
	for ( i=1; i<=x; i++){
		if (i % 15 == 0){
				output +="fizzbuzz";
			}
			else if(i % 3 == 0){
				output +='fizz';
			}
			else if(i % 5 == 0){
				output +='buzz';
			}
			else{
				output += i;
			}
		output +='<br />';
	}
	document.body.innerHTML = output;
}