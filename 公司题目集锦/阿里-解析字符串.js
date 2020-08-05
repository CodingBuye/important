/**
 * 将 document.cookie 解析为 HashMap， 
 * 如: document.cookie="a=1;b=2;c=3" 解析为 {a: "1", b: "2", c:"3"}
 */

function parse(str) {
    str = str.substring(16);
    var arr = str.split(";");
    var dict = {};
    for(let item of arr) {
        let itemArr = item.split("=");
        dict[itemArr[0]] = itemArr[1];
    }
    return dict;
}

console.log(parse('document.cookie="a=1;b=2;c=3"'));