class Stack {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  put(el) {
    this.arr.push(el);
    this.size++;
  }

  out() {
    this.size--;
    return this.arr.pop();
  }
}

const stack = new Stack();
stack.put(1);
stack.put(2);
stack.put(3);
stack.put(4);

let out;
out = stack.out();
out = stack.out();
out = stack.out();
out = stack.out();
