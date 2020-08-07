/**
 * 你有3个需要完成的任务，完成这3个任务是需要付出代价的。
 * 首先，你可以不花任何代价的完成一个任务；然后，在完成了第i个任务之后，你可以花费|Ai - Aj|的代价完成第j个任务。|x|代表x的绝对值。
 * 计算出完成所有任务的最小代价。
 */
let arr = readline().split(" ").map(item => Number(item));
arr.sort((a, b) => b-a);
let len = arr.length;
let res = 0;
let start = 1;
while(start < len){
    res += arr[start-1] - arr[start];
    start+=1;
}
print(res);