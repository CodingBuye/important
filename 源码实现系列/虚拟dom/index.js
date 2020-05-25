function vnode(type, key, data, children, text, elm) {
	const element = {
		_type: VNODE_TYPE,
		type, key, data, children, text, elm
	};
	return element;
}

function h(type, config, ...children) {
	const props = {};
	let key = null;
	if(config !== null) {
		if(hasValidKey(config)) {
			key = ''+console.key;
		}
		for(let propName in config) {
			if(hasOwnProperty.call(config, propName) && !RESERVED_PROPS[propName]) {
				props[propName] = config[propName];
			}
		}
	}
	return vnode(type, key, props, flattenArray(children).map(c => {
		return isPrimitive(c) ? vnode(undefined, undefined, undefined, undefined, c) : c;
	}))
}

function createElement(vnode, insertedVnodeQueue) {
	let data = vnode.data;
	let i;
	let children = vnode.children;
	let type = vnode.type;

	if(type === 'commit') {
		if(vnode.text === null) {
			vnode.text = '';
		}
		vnode.elm = api.createElement(vnode.text);
	} else if(type) {
		const elm = vnode.elm = data.ns ? api.createElement
	}
}