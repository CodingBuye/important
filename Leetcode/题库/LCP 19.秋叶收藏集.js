var minimumOperations = function(leaves) {
    return Array.from(leaves).reduce((p, v, i) => i === 0 ? p : [p[0] + (v === 'r' ? 0 : 1), Math.min(p[0], p[1]) + (v === 'r' ? 1 : 0), Math.min(p[1], p[2]) + (v === 'r' ? 0 : 1)], [leaves[0] === 'r' ? 0 : 1, Infinity, Infinity])[2];
}