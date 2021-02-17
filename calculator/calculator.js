function add (a,b) {
	return a+b;
	
}

function subtract (a,b) {
	return a-b;
	
}

function sum (array) {
	return array.reduce((total,n)=>{
		return total + n;
	},0)
	
}

function multiply (array) {
	if (!array[0]){
		return 0;
	}
	return array.reduce((product,n)=>{
		return product*n;
	},1)
	
}

function power(a,n) {
	return Math.pow(a,n);	
}

function factorial(n) {
	if (n==0){
		return 1;
	}
	return n*factorial(n-1);	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}