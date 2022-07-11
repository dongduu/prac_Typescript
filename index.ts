type Food = string;

const kimchi: Food = "good";

//////////////////////////////////////////////

type Player = {
  nickName: string;
  healthBar: number;
};

const nico: Player = {
  nickName: "nico",
  healthBar: 10,
};

//////////////////////////////////////////////

type NickName = string;
type Health = number;

type Player = {
  nickName: NickName;
  healthBar: Health;
};

//////////////////////////////////////////////

type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type Player = {
  nickName: string;
  team: Team;
  health: Health;
};

const nico: Player = {
  nickName: "nico",
  team: "red",
  health: 5,
};
