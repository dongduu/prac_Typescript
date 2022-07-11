interface User {
  name: string;
  // readonly name: string
}

interface Player extends User {}

const nico: Player = {
  name: "nico",
};

/////////////////////////////////////////////////

type User = {
  name: string;
};

type Player = User & {};

const nico: Player = {
  name: "nico",
};

/////////////////////////////////////////////////

interface User {
  name: string;
}

interface User {
  lastName: string;
}

interface User {
  health: number;
}

const nico: User = {
  name: "nico",
  lastName: "le",
  health: 10,
};
