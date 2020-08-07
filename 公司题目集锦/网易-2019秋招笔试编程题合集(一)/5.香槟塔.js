/**
 * 节日到啦，牛牛和妞妞邀请了好多客人来家里做客。
他们摆出了一座高高的香槟塔，牛牛负责听妞妞指挥，往香槟塔里倒香槟。
香槟塔有个很优雅的视觉效果就是如果这一层的香槟满了，就会从边缘处往下一层流去。
妞妞会发出两种指令，指令一是往第x层塔内倒体积为v的香槟，指令二是询问第k层塔香槟的体积为多少。
告诉你香槟塔每层香槟塔的初始容量，你能帮牛牛快速回答妞妞的询问吗？
 */

var [n, m] = readline().split(" ").map(item => Number(item));
var initalArr = readline().split(" ").map(item => Number(item));
var volume = new Array(n).fill(0);
while(m--) {
    let arr = readline().split(" ").map(item => Number(item));
    if(arr[0] === 1) {
        print(volume[arr[1]-1]);
    } else {
        let index = arr[1] - 1;
        while(index < n) {
            let total = initalArr[index];
            let current = volume[index];
            let diff = total - current;
            if(arr[2] <= diff) {
                volume[index] += arr[2];
                arr[2] = 0;
                break;
            } else {
                volume[index] += diff;
                arr[2] -= diff;
                index+=1;
            }
        }
    }
}