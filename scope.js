var scopeVar = "hello";

function runOne() {
	var scopeVar = "world";

	console.log('Run one:', scopeVar);
}


function runTwo() {
	console.log('Run two: ', scopeVar);
}

runOne();
runTwo();