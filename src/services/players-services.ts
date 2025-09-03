
import {findPlayerById, findAllPlayers, addPlayers, deleteOnePlayer, findAndModifyPlayer} from "../repositories/players-repository";
import { ok, noContent, badRequest, created } from "../utils/http-helper";
import { PlayerModel } from "../model/player-model";
import { StatisticsModel } from "../model/stastistics-model";

export const getPlayersData = async () => {
  const data = await findAllPlayers();

  let response = null;
  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }
  return response;
};

export const getPlayersById = async (id: number) => {
  const data = await findPlayerById(id);
  let response = null;
  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }
  return response;
};

export const createPlayer = async (player: PlayerModel) => {
  let response = null;
  if (Object.keys(player).length != 0) {
     await addPlayers(player)
     response = await created()
  } else {
    response = await badRequest();
  }
  return response
};
export const deletePlayersById = async (id: number) => {
   const data = await findPlayerById(id);
   if (data) {
      await deleteOnePlayer(id)
      return ok({message: "delete"});
   } else {
      return badRequest(); 
   }
}

export const updatePlayers = async (id: number, statistics: StatisticsModel) => {
   const data = await findAndModifyPlayer(id, statistics)
   return await ok(data);
}
