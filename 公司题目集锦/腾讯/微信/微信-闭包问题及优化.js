for (var i = 0; i < 4; i++) {
    setTimeout(function() {
      console.log(i);
    }, 300);
}

// 优化1
for(var i=0;i<4;i++){
    (function(index){
        setTimeout(function(){
            console.log(index);
        }, 300);
    })(i);
}

// 优化2
for(let i=0;i<4;i++){
    setTimeout(function(){
        console.log(i);
    }, 300);
}