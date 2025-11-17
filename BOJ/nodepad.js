/*
else if (!this.head.next) {
      //이게 원형 리스트에서 필요할까..?
      this.head = null;
      this.movedArr.push(this.head.data);
      return;
    } else if (!this.curNode.next) {
      //이게 원형 리스트에서 필요할까..?
      this.curNode.prev = null;
    }
*/

const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .pop()
  .split(" ")
  .map((el) => Number(el));

function sol(input) {
  let towStack = [[Number.MIN_SAFE_INTEGER, 0]];
  const res = input.map((tow, i) => {
    const pos = i + 1;

    while (towStack[towStack.length - 1][0] < tow) {
      towStack.pop();
      if (towStack.length === 0) {
        towStack.push([tow, pos]);
        return 0;
      }
    }
    const top = towStack[towStack.length - 1];
    towStack.push([tow, pos]);
    return top[1];
  });

  console.log(res.join(" "));
}

sol(input);
