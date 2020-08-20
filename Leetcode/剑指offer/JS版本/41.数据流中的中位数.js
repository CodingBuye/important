/*
参考：
https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/solution/tu-xie-zheng-li-bao-li-fa-er-fen-cha-zhao-shou-don/
*/

const defaultCMP = (x, y) => x > y; // 默认大根堆
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

class Heap {
	constructor(cmp=defaultCMP) {
		this.container = [];
		this.cmp = cmp;
	}

	insert(data){
		const {container, cmp} = this;
		container.push(data);
		let index = container.length - 1;
		while(index) {
			let parent = Math.floor((index-1)/2);
			if(cmp(container[index], container[parent])) {
				swap(container, index, parent);
				index = parent;
			} else {
				break;
			}
		} 
	}

	extract() {
		const {container, cmp} = this;
		if(!container.length) return null;
		swap(container, 0, container.length-1);
		const res = container.pop();
		let index = 0;
		let len = container.length;
		let left = index * 2 + 1;
		while(left < len) {
			let right = index * 2 + 2;
			if(right < len && cmp(container[right], container[left])) {
				left = right;
			}
			if(cmp(container[left], container[index])) {
				swap(container, left, index);
				index = left;
				left = index * 2 + 1;
			} else {
				break;
			}
		}
		return res;
	}

	top() {
		if(this.container.length) {
			return this.container[0];
		} else {
			return null;
		}
	}
}

var MedianFinder = function() {
	this.maxHeap = new Heap();
	this.minHeap = new Heap((x, y) => x < y);
}

MedianFinder.prototype.addNum = function(num) {
	this.maxHeap.insert(num);
	this.minHeap.insert(this.maxHeap.top());
	this.maxHeap.extract();

	if(this.maxHeap.container.length < this.minHeap.container.length) {
		this.maxHeap.insert(this.minHeap.top());
		this.minHeap.extract();
	}
}

MedianFinder.prototype.findMedian = function() {
	if(this.maxHeap.container.length > this.minHeap.container.length) {
		return this.maxHeap.top();
 	} else {
 		return (this.maxHeap.top()+this.minHeap.top())/2;
 	}
}
