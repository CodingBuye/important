import { init, h } from 'snabbdom';

let patch = init([]);
let vnode = h('div#container', [h('h1', 'hello h1'), h('p', '这是一个p元素')]);

let app = document.querySelector("#app");
let oldVnode = patch(app, vnode);

setTimeout(() => {
    vnode = h('div#container', [h('h1', 'hello h1 1'), h('p', '这是一个p元素 1')]);
    patch(oldVnode, vnode)

    // 清空页面元素
    // patch(vnode, null); // 错误
    patch(oldVnode, h('!')) // 创建注释节点
}, 2000)