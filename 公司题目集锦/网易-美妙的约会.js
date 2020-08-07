/**
 * 牛牛和妞妞在一天晚上决定一起去看一场情人节演唱会，可是由于这场演唱会实在太出名了，有很多情侣都来观看，牛牛和妞妞不小心被人流冲散了！
维持秩序的人决定，让大家排成一列，相邻两个进去的人（2k-1和2k，k为正整数）坐在相邻座位。但是现在的队伍乱糟糟的，有很多情侣都不在相邻位置。维持秩序的人同意让情侣们跟相邻的人交换位置，直到所有情侣都在2k-1和2k位置上为止。
但是维持秩序的人很没有耐心，所以需要最少的交换次数，你能帮情侣们算出这个次数吗？
 */

var n = parseInt(readline());
var arr = readline().split(" ").map(item => Number(item));
var res = 0;
while(arr.length > 0) {
    var first = arr.shift();
    var index = arr.indexOf(first);
    res += index;
    arr.splice(index, 1);
}
print(res);