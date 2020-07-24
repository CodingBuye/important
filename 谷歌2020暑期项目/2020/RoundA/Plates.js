/**
    问题描述：
    Dr. Patel有N堆盘子。每个堆上包含K个盘子。每个盘子都有一个正的美值，用来描述它看起来有多漂亮。
    Dr. Patel想用P个盘子来做今晚的晚餐。如果他想要在某个堆上取一个盘子，他必须将该盘子上的盘子都取出来。
    帮助帕特尔博士选择能最大化美容价值的P盘。

    输入：
    输入的第一行给出了测试用例的数量。每个测试用例都以一行包含三个整数N、K和p的代码开始，
    然后，接下来是N行代码。
    第i行包含K个整数，从上到下描述了每一叠盘子的美观值。

    输出：
    对于每个测试用例，输出一行包含案例#x: y的代码，其中x是测试用例号(从1开始)，y是Dr. Patel可以选择的美值的最大总和。
 */
var readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let T = 0; // 测试用例个数
read.on('line', function(line) {
    T = parseInt(line);
    for(let i=1;i<T+1;i++){
        let [N, K, P] = line.split(" ").map(item => Number(item));
        let arr = [];
        for(let m = 0; m<N;m++){
            let temp = [];
            for(let n=0;n<K;n++) {
                temp = line.split(" ").map(item => Number(item));
                arr.push(...temp);
            }
        }
        print(`Case #${i}: ${helper(arr, P)}`);
    }
});


function helper(arr, P) {
    let max = 0;

    
}