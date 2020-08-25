function disorder(arr) {
    for(let i=0,len=arr.length;i<len;i++){
        const random = Math.floor(Math.random()*(i+1));
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    return arr;
}

console.log(disorder([1,2,3,4,5,6]));