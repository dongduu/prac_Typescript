type PlayerA = {
  name: string;
};

type PlayerAA = PlayerA & {
  lastName: string;
};

// type PlayerAA = {
//    health: number
//}

interface PlayerB {
  name: string;
}

interface PlayerBB extends PlayerB {
  lastName: string;
}

interface PlayerBB {
  health: number;
}

const playerA: PlayerAA = {
  name: "dongdu",
  lastName: "lee",
};

const playerB: PlayerBB = {
  name: "dongdu",
  lastName: "lee",
  health: 10,
};
