interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}`;
  }
}

function makeUser(user: User) {
  //: User
  return "hi";
  //return {
  // firstName: 'dongduu',
  // lastName: 'lee',
  // fullName: () => "xx",
  // sayHi: (name) => "string"
  // }
}

makeUser({
  firstName: "dongduu",
  lastName: "lee",
  fullName: () => "xx",
  sayHi: (name) => "string",
});
