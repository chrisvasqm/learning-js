class Person {
  #firstname;
  #lastname;

  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }

  get fullname() {
    return `${this.#firstname} ${this.#lastname}`;
  }
}

const john = new Person("John", "Doe");
console.log(john.fullname);
