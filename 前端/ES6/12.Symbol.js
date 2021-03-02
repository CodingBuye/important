/**
 * 背景：
 * ES5的对象属性名都是字符串，容易造成属性名冲突。
 * Symbol可以保证每个属性的名字都是独一无二的，从根本上防止属性名的冲突
 * 
 * Symbol是JS的第七种数据数据类型，前六种为：undefined、null、布尔Boolean、字符串String、数值Number、对象Object
 * Symbol通过Symbol函数生成，这就是说，对象的属性名现在可以有两种类型：一种是原来就有的字符串，另一种就是新增的 Symbol 类型。
 * 凡是属性名属于Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
 */

let s = Symbol(); // Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象，不能添加属性。基本上，它是一种类似于字符串的数据类型。
console.log(typeof s); // "symbol"

let s1 = Symbol("foo"); // Symbol(foo) 
let s2 = Symbol("bar"); // Symbol(far)

s1.toString(); // "Symbol(foo)"
s2.toString(); // "Symbol(far)"

// 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，
// 将其转为字符串，然后才生成一个 Symbol 值。
const obj = {
    toString() {
        return 'abc';
    }
}
const sym = Symbol(obj);
console.log(sym); // Symbol(abc)

/**
 * Symbol函数的参数只是表示对当前 Symbol 值的描述，
 * 因此相同参数的Symbol函数的返回值是不相等的。
 */
let s3 = Symbol();
let s4 = Symbol();
console.log(s3 === s4); // false

let s5 = Symbol("foo");
let s6 = Symbol("foo");
console.log(s5 === s6); // false