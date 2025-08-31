import { badRequest } from "./../utils/http-helper";
import { Request, Response } from "express";
import {
  getPlayersData,
  getPlayersById,
  createPlayer,
} from "../services/players-services";

export const getPlayers = async (req: Request, res: Response) => {
  const response = await getPlayersData();
  res.status(response.statusCode).json(response.body);
};

export const getPlayersId = async (req: Request, res: Response) => {
  let id = req.params.id;
  console.log(id);
  const response = await getPlayersById(parseInt(id));
  res.status(response.statusCode).json(response.body);
};

export const postPlayers = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const response = await createPlayer(bodyValue);
  if (response) {
    res.status(response.statusCode).json(response.body);
  }
};
