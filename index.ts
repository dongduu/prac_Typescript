type Words = {
  // object 타입 선언 방식
  [key: string]: string; // "potato" : "food"
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    // 클래스를 타입처럼 사용하는 방법
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국음식");

const dict = new Dict();

dict.add(kimchi);
dict.def(kimchi);

console.log(dict);
console.log(kimchi);
