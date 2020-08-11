/**
 * 在前端开发中，通常会把多个 js 文件合并成一个文件，以减少网络请求次数，达到优化加载速度的目的，
 * 但是当文件之间存在依赖关系时，对 js 合并的顺序，会有一定的要求，比如 A.js 依赖了 B.js，
 * 那打包后的文件，B.js 需要排在 A.js 的前面。实现一个函数`resolve(tree)`，根据 js 的依赖关系树 tree，
 * 输出合理的打包顺序的数组（结果可能不唯一，输出其中一种即可）。
 */
var tree = [{
    name: "page.js",
    require: [
        {
            name: "A.js",
            require: [
                {
                    name: "B.js",
                    require: [
                        {
                            name: "C.js",
                        },
                    ],
                },
            ],
        },
        {
            name: "D.js",
            require: [
                {
                    name: "C.js",
                },
                {
                    name: "E.js",
                },
            ],
        },
    ],
}];

var resolve = function(tree) {
    const res = [];
    function dfs(mapList) {
        if(mapList.length === 0) return;
        mapList.forEach(item => {
            const {name, require=[]} = item;
            dfs(require);
            !res.includes(name) && res.push(name);
        });
    }

    dfs(tree);
    return res;
}

console.log(resolve(tree));