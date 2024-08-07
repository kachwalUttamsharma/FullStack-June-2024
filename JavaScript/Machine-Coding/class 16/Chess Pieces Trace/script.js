/*
    Approach:
        1. Initialise prev with null
        2. Pick the box row and column through click event
        3. if prev is not null then simply fill the boxes
        4. else remove the previous filled boxes through previous coordinates and fill the boxes for current box, 
        5. update prev to current box {row, col}
        so that we don't have to iterate all 64 boxes to reset, 
        so for an N×N board the time complexity for resetting and updating the board = O(N) + O(N) = O(N)
*/


const select = str => document.querySelector(str);
const create = str => document.createElement(str);
const int = x => parseInt(x);

const container = select(".container"), board = select(".board");

window.addEventListener("load", e => {
    for (let i = 0; i < 8; i++) {
        const row = create("div");
        row.classList.add("row");
        row.id = i;
        for (let j = 0; j < 8; j++) {
            const box = create("div");
            box.classList.add("box");
            box.classList.add(`${((i + j) & 1) ? "green" : "white"}`);
            box.id = j;
            row.appendChild(box);
        }
        board.appendChild(row);
    }
});

const pieces = select("#pieces");
let option = pieces.value, prev_option = option;
let prevBishop = null, prevRook = null, prevKnight = null;
const dirs = [[-1, -2], [-1, 2], [-2, -1], [-2, 1], [1, -2], [1, 2], [2, -1], [2, 1]];

const updateBox = (row, col, flag) => {
    const box = board.children[row].children[col];
    flag ? box.classList.add("active") : box.classList.remove("active");
};

const updateBishop = (r1, c1, r2, c2, flag) => {
    for (let i = 0; i < 8; i++) {
        if (i >= r1 && c1 < 8) {
            updateBox(i, c1, flag);
            c1++;
        }
        if (i >= r2 && c2 >= 0) {
            updateBox(i, c2, flag);
            c2--;
        }
    }
};

const updateRook = (c1, r2, flag) => {
    for (let i = 0; i < 8; i++) {
        updateBox(i, c1, flag);
    }
    for (let j = 0; j < 8; j++) {
        updateBox(r2, j, flag);
    }
};

const updateKnight = (r, c, flag) => {
    for (const dir of dirs) {
        const nr = r + dir[0], nc = c + dir[1];
        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
            updateBox(nr, nc, flag);
        }
    }
};

const refreshBishop = () => {
    if (prevBishop) {
        const box = board.children[prevBishop.row].children[prevBishop.col];
        box.classList.remove("active2");
        let minLeft = Math.min(prevBishop.row, prevBishop.col), minRight = Math.min(prevBishop.row, 7 - prevBishop.col);
        let prev_r1 = prevBishop.row - minLeft, prev_c1 = prevBishop.col - minLeft;
        let prev_r2 = prevBishop.row - minRight, prev_c2 = prevBishop.col + minRight;
        updateBishop(prev_r1, prev_c1, prev_r2, prev_c2, 0);
    }
};

const refreshRook = () => {
    if (prevRook) {
        const box = board.children[prevRook.row].children[prevRook.col];
        box.classList.remove("active2");
        updateRook(prevRook.col, prevRook.row, 0);
    }
};

const refreshKnight = () => {
    if (prevKnight) {
        const box = board.children[prevKnight.row].children[prevKnight.col];
        box.classList.remove("active2");
        updateKnight(prevKnight.row, prevKnight.col, 0);
    }
};

pieces.addEventListener("change", e => {
    option = e.target.value;
    switch (prev_option) {
        case "bishop":
            refreshBishop();
            break;
        case "rook":
            refreshRook();
            break;
        case "queen":
            refreshBishop();
            refreshRook();
            break;
        case "knight":
            refreshKnight();
            break;
    }
    prev_option = option;
});

board.addEventListener("click", e => {
    let row = int(e.target.parentNode.id), col = int(e.target.id);
    const bishop = () => {
        prevBishop = { "row": row, "col": col };
        let minLeft = Math.min(row, col), minRight = Math.min(row, 7 - col);
        let r1 = row - minLeft, c1 = col - minLeft;
        let r2 = row - minRight, c2 = col + minRight;
        updateBishop(r1, c1, r2, c2, 1);
    }
    const rook = () => {
        prevRook = { "row": row, "col": col };
        updateRook(col, row, 1);
    }
    const knight = () => {
        prevKnight = { "row": row, "col": col };
        updateKnight(row, col, 1);
    }

    switch (option) {
        case "bishop":
            refreshBishop();
            bishop();
            break;
        case "rook":
            refreshRook();
            rook();
            break;
        case "queen":
            refreshBishop();
            refreshRook();
            bishop();
            rook();
            break;
        case "knight":
            refreshKnight();
            knight();
            break;
    }
    const box = board.children[row].children[col];
    box.classList.add("active2");
});