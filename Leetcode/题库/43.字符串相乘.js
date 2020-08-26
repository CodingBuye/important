var multiply = function(num1, num2) {
    if(num1 === "0" || num2 === "0") return "0";
    let len1 = num1.length, len2 = num2.length;
    let res = new Array(len1+len2).fill(0);
    for(let i=len1-1;i>=0;i--){
        let n1 = num1[i].charCodeAt() - '0'.charCodeAt();
        for(let j=len2-1;j>=0;j--){
            let n2 = num2[j].charCodeAt() - '0'.charCodeAt();
            let sum = (res[i+j+1]+n1*n2);
            res[i+j+1] = sum % 10;
            res[i+j] += parseInt(sum/10);
        }
    }
    let ans = res.map(item => item.toString()).join("");
    return ans[0] === '0' ? ans.slice(1) : ans;
}