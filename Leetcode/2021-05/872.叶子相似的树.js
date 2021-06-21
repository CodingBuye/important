function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    if(root1 === null && root2 === null) return true;
    if(!root1 || !root2) return false;
    let queue1 = [root1], queue2 = [root2];
    while(queue1.length && queue2.length) {
        let p1 = queue1.shift(), p2 = queue2.shift();
        if(isLeaf(p1) && isLeaf(p2)) {
            if(p1.val !== p2.val) {
                return false;
            }
        } else if(isLeaf(p1) && !isLeaf(p2)) {
            if(p2.left) {
                queue2.unshift(p2.left);
            }
            if(p2.right) {
                queue2.unshift(p2.right);
            }
        } else if(!isLeaf(p1) && isLeaf(p2)) {
            if(p1.left) {
                queue1.unshift(p1.left);
            }
            if(p1.right) {
                queue1.unshift(p1.right);
            }
        } else {
          
        if(p1.left) {
            queue1.push(p1.left);
        }
        if(p1.right) {
            queue1.push(p1.right);
        }

        if(p2.left) {
            queue2.push(p2.left);
        }

        if(p2.right) {
            queue2.push(p2.right);
        } }

    }
    return !(queue1.length !== 0 || queue2.length !== 0);


};

function isLeaf(node) {
    return node.left === null && node.right === null;
}


// 测试
let root1 = new TreeNode(3,
    new TreeNode(5,
        new TreeNode(6),
        new TreeNode(2, new TreeNode(7), new TreeNode(4))),
    new TreeNode(1, new TreeNode(9), new TreeNode(8)));

let root2 = new TreeNode(3,
    new TreeNode(5,
        new TreeNode(6),
        new TreeNode(2, new TreeNode(7), new TreeNode(4))),
    new TreeNode(1, new TreeNode(9), new TreeNode(8)));

console.log(leafSimilar(root1, root2));

let root3 = new TreeNode(1);
let root4 = new TreeNode(1);
console.log(leafSimilar(root3, root4));

let root5 = new TreeNode(1);
let root6 = new TreeNode(2);
console.log(leafSimilar(root5, root6));

let root7 = new TreeNode(1, new TreeNode(2));
let root8 = new TreeNode(2, new TreeNode(2));
console.log(leafSimilar(root7, root8));

let root9 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let root10 =  new TreeNode(1, new TreeNode(3), new TreeNode(2));
console.log(leafSimilar(root9, root10));