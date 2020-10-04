var numJewelsInStones = function(J, S){
    let length = S.length;
    for(let i=0;i<J.length;i++){
        S = S.replace(new RegExp(J[i], 'g'), "");
    }
    return length - S.length;
}