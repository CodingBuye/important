var isNumber = function(s) {
    if(!s || s.length === 0) return false;
    let arr = s.trim().split("");
    let numShow = false;
    let dotShow = false;
    let eShow = false;
    for(let i=0,len=arr.length;i<len;i++){
        if(arr[i] >= '0' && arr[i] <= '9') {
            numShow = true;
        } else if(arr[i] === '.') {
            if(dotShow || eShow) return false;
            dotShow = true;
        } else if(arr[i] === 'e' || arr[i] === 'E') {
            if(eShow || !numShow) return false;
            eShow = true;
            numShow = false;
        } else if(arr[i] === '-' || arr[i] === '+') {
            if(i !== 0 && arr[i-1] !== 'e' && arr[i-1] !== 'E') {
                return false;
            }
        } else {
            return false;
        }
    }
    return numShow;
}

console.log(isNumber("+100"))
console.log(isNumber("5e2"))
console.log(isNumber("-123"))
console.log(isNumber("3.1416"))
console.log(isNumber("-1E-16"))
console.log(isNumber("0123"))
console.log(isNumber("12e"))
console.log(isNumber("1a3.14"))
console.log(isNumber("1.2.3"))
console.log(isNumber("+-5"))
console.log(isNumber("12e+5.4"))