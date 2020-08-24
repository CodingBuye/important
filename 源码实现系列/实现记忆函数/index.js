/**
 * 基本需求：若某一个函数已经执行过一次，则再次执行时无需运行，可直接拿到结果
 * 这里实现一个单参数的简单形式
 * 效果如下：
 *  const fn = memo((x) => {
        console.log('执行了一次')
        return x * 2
    })
    fn(1) // 执行了一次 2
    fn(1) // 2
    fn(1) // 2
    fn(2) // 执行了一次 4

    分析：fn 还能执行，说明 memo 返回的是一个函数，
    且传入的参数用于执行函数。我们可以在 memoed 中创建一个对象来存储传入的参数
    并对比此参数以前是否传入过。
 */
const memo = function(fn) {
    const memoed = function(param) {
        if(!(param in memoed.cache)) {
            memoed.cache[param] = fn.apply(this, arguments);
        }
        return memoed.cache[param];
    }
    memoed.cache = {};
    return memoed;
}

const fn = memo(x => {
    console.log("执行了一次");
    return x*2;
})

fn(1);
fn(1);
fn(1);
fn(2);