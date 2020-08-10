function solve(arr) {
    arr.sort((a, b) => a[0] - b[0]);
    let maxCount = 0;
    let count = 1;
    let i = 0, j = 1;
    while(j < arr.length) {
        while(j<arr.length && arr[j][1] > arr[j-1][1]) {
            count += 1;
            j++;
        }
        if(j === arr.length) {
            break;
        } else {
            maxCount = Math.max(maxCount, count);
            i = j;
            j = i+1;
            count = 1;
        }
    }
    maxCount = Math.max(maxCount, count);
    return maxCount;
}

console.log(solve([[5,5], [3, 1], [2, 6], [4, 2], [1, 4]]));