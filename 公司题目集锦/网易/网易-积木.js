var T = parseInt(readline());
while(T--){
    let [n, m] = readline().split(" ").map(item => Number(item)); // n=5, m=2;
    let arr = readline().split(" ").map(item => Number(item));    // 0,0,1,2,1
    print(solve(n, m, arr));
}

function solve(n, m, arr) {
    for(let i=0;i<n;i++){
        if(i === 0) {
            if(arr[i] === 0) continue;
            m += arr[i];
            arr[i]=0
        } else {
            if(arr[i] > arr[i-1]) {
                if(arr[i] === arr[i-1]+1) {
                    continue;
                } else {
                    m += (arr[i]-arr[i-1]-1);
                    arr[i] = arr[i-1]+1;
                }
            } else if(arr[i] === arr[i-1]) {
                if(m >= 1) {
                    arr[i] += 1;
                    m-=1;
                } else {
                    return "NO";
                }
            } else {
                let num = (arr[i-1]+1) - arr[i];
                if(m >= num) {
                    arr[i] = arr[i-1]+1;
                    m -= num;
                } else {
                  
                    return "NO";
                }
            }
        }
    }
    return "YES";
}