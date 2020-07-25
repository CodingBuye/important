var result = [], a = 3, total = 0;

function f(a){
    var i = 0;
    for(;i<3;i++){
        result[i] = function() {
            total += a * i;
            console.log(total);
        }
    }
}

f(1);
result[0](); // 3
result[1](); // 6
result[2](); // 9