var generateParenthesis = function(n) {
    let solution = [];
    getParens(solution, "", 0, 0, n);
    return solution;
};

function getParens(solution, s, open, close, n) {
    if (open === n && close === n) {
        solution.push(s);
        return;
    }

    if (open < n) {
        getParens(solution, s + "(", open + 1, close, n);
    }
    
    if (close < open) {
        getParens(solution, s + ")", open, close + 1, n);
    }
};