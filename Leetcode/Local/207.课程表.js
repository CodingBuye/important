/**
 * https://leetcode-cn.com/problems/course-schedule/
 */
var canFinish = function(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0); // 入度数组
    const map = {};                                 // 邻接表
    for (let [cur, pre] of prerequisites) {
        inDegree[cur]++;              // 求课的初始入度值
        if (map[pre]) {               // 当前课已经存在于邻接表
            map[pre].push(cur); // 添加依赖它的后续课
        } else {                                      // 当前课不存在于邻接表
            map[pre] = [cur];
        }
    }
    const queue = [];
    for (let i = 0; i < numCourses; i++) { // 所有入度为0的课入列
        if (inDegree[i] === 0) queue.push(i);
    }
    while (queue.length) {
        const pre = queue.shift();           // 当前选的课，出列
        numCourses--;                             
        const toEnQueue = map[pre];          // 获取这门课对应的后续课
        if (toEnQueue && toEnQueue.length) {      // 确实有后续课
        for (let cur of toEnQueue) {
            inDegree[cur]--;             // 依赖它的后续课的入度-1
            if (inDegree[cur] === 0) {    // 如果因此减为0，入列
                queue.push(cur);
            }
        }
        }
    }
    return numCourses === 0; // 选了的课等于总课数，true，否则false
}

// 测试
console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1,0], [0, 1]]));
// canFinish(2, [[1, 0]])