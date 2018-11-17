function plus()
{
	var a = document.getElementById("number1").value;
	var b = document.getElementById("number2").value;
	
	if (a == "" || b == "") document.getElementById("equal").innerHTML="Input both numbers!";
	else
	{
		var a = eval(a);
		var b = eval(b);
		
		var equal = a + b;
	
		document.getElementById("equal").innerHTML=a+" + "+b+" = "+equal;
	}
}
	
function minus()
{
	var a = document.getElementById("number1").value;
	var b = document.getElementById("number2").value;
	
	if (a == "" || b == "") document.getElementById("equal").innerHTML="Input both numbers!";
	else
	{
		var a = eval(a);
		var b = eval(b);
		
		var equal = a - b;
	
		document.getElementById("equal").innerHTML=a+" - "+b+" = "+equal;
	}
}

function multiply()
{
	var a = document.getElementById("number1").value;
	var b = document.getElementById("number2").value;
	
	if (a == "" || b == "") document.getElementById("equal").innerHTML="Input both numbers!";
	else
	{
		var a = eval(a);
		var b = eval(b);
		
		var equal = a * b;
	
		document.getElementById("equal").innerHTML=a+" × "+b+" = "+equal;
	}
}

function divide()
{
	var a = document.getElementById("number1").value;
	var b = document.getElementById("number2").value;
	
	if (a == "" || b == "") document.getElementById("equal").innerHTML="Input both numbers!";
	else if ((a <= 0 || a >= 0) && (b != 0))
	{
		var a = eval(a);
		var b = eval(b);
		
		var equal = a / b;
	
		document.getElementById("equal").innerHTML=a+" / "+b+" = "+equal;
	}
	else document.getElementById("equal").innerHTML="Never divide by zero!";
}

function modulo()
{
	var a = document.getElementById("number1").value;
	var b = document.getElementById("number2").value;
	
	if (a == "" || b == "") document.getElementById("equal").innerHTML="Input both numbers!";
	else if ((a <= 0 || a >= 0) && (b != 0))
	{
		var a = eval(a);
		var b = eval(b);
		
		var equal = a % b;
	
		document.getElementById("equal").innerHTML=a+" % "+b+" = "+equal;
	}
	else document.getElementById("equal").innerHTML="Never divide by zero!";
}

function exponent()
{
	var a = document.getElementById("number1").value;
	var b = document.getElementById("number2").value;
	
	if (a == "" || b == "") document.getElementById("equal").innerHTML="Input both numbers!";
	else
	{
		var a = eval(a);
		var b = eval(b);
		
		var equal = Math.pow(a,b);
	
		document.getElementById("equal").innerHTML=a+" ^ "+b+" = "+equal;
	}
}