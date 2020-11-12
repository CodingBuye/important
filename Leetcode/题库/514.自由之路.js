/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
    const indexMap = {};
    for (let i = 0; i < ring.length; i++) {
        const c = ring[i];
        if (indexMap[c]) {
            indexMap[c].push(i);
        } else {
            indexMap[c] = [i];
        }
    }

    const memo = new Array(ring.length)
    for (let i = 0; i < ring.length; i++) {
        memo[i] = new Array(key.length).fill(-1)
    }

    const dfs = (ringI, keyI) => {
        if (keyI === key.length) {
            return 0;
        }
        if (memo[ringI][keyI] !== -1) {
            return memo[ringI][keyI]
        }
        const cur = key[keyI];
        let res = Infinity;
        for (const targetI of indexMap[cur]) {
            const d1 = Math.abs(ringI - targetI);
            const d2 = ring.length - d1;
            const curMin = Math.min(d1, d2);
            res = Math.min(res, curMin + dfs(targetI, keyI + 1));
        }
        memo[ringI][keyI] = res;
        return res;
    };

    return key.length + dfs(0, 0);
};


console.log(findRotateSteps("godding", key = "gd"));
console.log(findRotateSteps("godding", key = "godding"));
console.log(findRotateSteps("iotfo","fioot"));