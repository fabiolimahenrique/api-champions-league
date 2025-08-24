import { Request, Response } from "express";
import { getPlayersData } from "../services/players-services";

export const getPlayers = async (req: Request, res: Response) => {
  const response = await getPlayersData()
  res.status(response.statusCode).json(response.body);
};
