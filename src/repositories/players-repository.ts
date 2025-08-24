import { PlayerModel } from "../model/player-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lima",
  },
  {
    id: 2,
    name: "Will",
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((p) => (p.id = id));
};
