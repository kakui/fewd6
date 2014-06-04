function squareNumber(number){
	return Math.pow(number, 2);
}

console.log("The results of squaring the number " + 5 + " is " + squareNumber(5));


function halfNumber(number){
	return number/2;
}

console.log("Half of " + 6 + " is " + halfNumber(6));


function percentOf(num1, num2){
	return (num1/num2) * 100;
}

console.log(10 + ' is ' + percentOf(10, 50) + '% of ' + 50);

function areaOfCircle(radius){
	var x = Math.PI * Math.pow(radius, 2);
	return Math.round(x * 100)/100;
}

console.log('The area of a circle with radius ' + 2 + ' is ' + areaOfCircle(2));

function someFunction(number){
	var a = halfNumber(number);
	var b = squareNumber(a);
	var c = areaOfCircle(b);
	var d = percentOf(b, c);
	return d;
}

console.log(someFunction(10));