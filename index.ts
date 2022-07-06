// 추상 클래스 & 추상 메소드
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    console.log(this.nickName);
  }
}

const dongdu = new Player("dongjoo", "lee", "동두");

dongdu.getFullName();
