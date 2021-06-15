function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var serialize = function(root) {
    if (!root) {
        return "[]";
    }

    let res = "";
    let node = root;
    const queue = [node];
    while (queue.length) {
        const front = queue.shift();
        if (front) {
            res += `${front.val},`;
            queue.push(front.left);
            queue.push(front.right);
        } else {
            res += "#,";
        }
    }

    res = res.substring(0, res.length - 1); // 去掉最后一个逗号

    return `[${res}]`;
};

var deserialize = function(data) {
    if (data.length <= 2) {
        return null;
    }
    data = data.replace(/\[/, "");
    data = data.replace(/\]/, "");
    let arr = data.split(",");
    
    let root = new TreeNode(parseInt(arr.shift()));
    let queue = [root];
    while(queue.length > 0) {
        let node = queue.shift();
        let leftVal = arr.shift();
        if(leftVal !== "#") {
            node.left = new TreeNode(parseInt(leftVal));
            queue.push(node.left);
        }
        let rightVal = arr.shift();
        if(rightVal !== "#") {
            node.right = new TreeNode(parseInt(rightVal));
            queue.push(node.right);
        }
    }
    return root;
};

let root = new TreeNode(1);
let node1 = new TreeNode(2);
let node2 = new TreeNode(3);
let node3 = new TreeNode(4);
let node4 = new TreeNode(5);

root.left = node1;
root.right = node2;
node2.left = node3;
node2.right = node4;

console.log(serialize(root));
console.log(deserialize(serialize(root)));