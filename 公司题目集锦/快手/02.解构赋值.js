//请写出以下返回的结果：
function move({x, y} = { x: 0, y: 0 }) {
    console.log([x, y])
}

move({x: 3, y: 8});  // [3, 8]
move({x: 3});        // [3, undefined]
move({});            // [unfined, unfined]
move();              // [0, 0]