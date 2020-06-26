// function fn(){ 
// 	var x = true; 
// 	return function(){  
// 		console.log(x ? 1 : 2); 
// 		x = !x;  
// 	}  
// }    

// var a = fn();
// a();
// a();
// a();
// a();

function* gen() {
	yield 1;
	yield 2;
	yield* gen();
}

let a = gen();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);