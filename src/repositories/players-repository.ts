import { PlayerModel } from "../model/player-model";
import { StatisticsModel } from "../model/stastistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lima",
    club: "Ceara",
    nationality: "Brazil",
    position: "10",
    statistics: {
      Overall: 9,
      Pace: 10,
      Shooting: 15,
      Passing: 60,
      Dribbling: 100,
      Defending: 50,
      Physical: 90,
    }
  }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((p) => (p.id === id));
};

export const addPlayers = async (player: PlayerModel) => {
  database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
   const index = database.findIndex( p => p.id === id);
   if (index !== -1) {
    database.splice(index, 1)
   }
}


export const findAndModifyPlayer = async (id: number, statisticts: StatisticsModel): Promise<PlayerModel> => {
   const index = database.findIndex( p => p.id === id);
   if (index !== -1) {
      database[index].statistics = statisticts; 
   }  
   return database[index];
}