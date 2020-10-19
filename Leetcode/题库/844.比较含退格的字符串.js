var backspaceCompare = function(S, T) {
    let stack1 = [];
    let stack2 = [];
    for(let i=0;i<S.length;i++){
        if(S[i] === "#") {
            stack1.length > 0 && stack1.pop();
        } else {
            stack1.push(S[i]);
        }
    }

    for(let i=0;i<T.length;i++){
        if(T[i] === "#") {
            stack2.length > 0 && stack2.pop();
        } else {
            stack2.push(T[i]);
        }
    }

    return stack1.join("") === stack2.join("");
}