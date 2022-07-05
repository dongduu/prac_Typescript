type Player<E> = {
  name: string;
  extraInfo: E;
};

type DongduExtra = {
  favFood: string;
};

type DonguPlayer = Player<DongduExtra>;

const dongdu: DonguPlayer = {
  name: "dongdu",
  extraInfo: {
    favFood: "banana",
  },
};

// name만 가진 프로필 만들기
const boong: Player<null> = {
  name: "boong",
  extraInfo: null,
};
