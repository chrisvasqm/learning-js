class Stack {
  #items = [];

  push(item) {
    this.#items.push(item);
  }

  pop() {
    if (this.#items.length === 0) throw new Error("Stack is empty");

    return this.#items.pop();
  }

  peek() {
    if (this.#items.length === 0) throw new Error("Stack is empty");

    return this.#items[this.#items.length - 1];
  }

  get count() {
    return this.#items.length;
  }
}
