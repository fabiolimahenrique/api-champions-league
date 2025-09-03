import { Request, Response } from "express";
import * as service from "../services/players-services";
import { StatisticsModel } from "../model/stastistics-model";

export const getPlayers = async (req: Request, res: Response) => {
  const response = await service.getPlayersData();
  res.status(response.statusCode).json(response.body);
};

export const getPlayersId = async (req: Request, res: Response) => {
  let id = req.params.id;
  console.log(id);
  const response = await service.getPlayersById(parseInt(id));
  res.status(response.statusCode).json(response.body);
};

export const postPlayers = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const response = await service.createPlayer(bodyValue);
  if (response) {
    res.status(response.statusCode).json(response.body);
  }
};

export const deletePlayers = async (req: Request, res: Response) => {
  let id = req.params.id;
  let response = await service.deletePlayersById(parseInt(id));
  res.status(response.statusCode).json(response.body);
};

export const updatePlayers = async (req: Request, res: Response) => {
  let id = parseInt(req.params.id);
  const bodyValue: StatisticsModel = req.body
  let response = await service.updatePlayers(id, bodyValue);
  res.status(response.statusCode).json(response.body);
};

