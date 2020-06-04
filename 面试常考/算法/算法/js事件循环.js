function test() {
  console.log(1);
  setTimeout(function () { 
    console.log(2);  
  }, 1000);
}

test();

setTimeout(function() {
  console.log(3);
})

new Promise(function(resolve){
  console.log(4);
  setTimeout(function() {
    console.log(5)
  },100);
  resolve();
}).then(function(){
  setTimeout(function () {  
    console.log(6)
  }, 0);
  console.log(7);
})

console.log(8);

// 宏任务：3 6 5 2
// 微任务：7

// 1 4 8 7 3 6 5 2