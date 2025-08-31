import { getPlayers, getPlayersId, postPlayers } from './controllers/players-controller';
import { Router } from "express";

const router = Router();

router.get("/players", getPlayers)
router.get("/players/:id", getPlayersId)
router.post("/players", postPlayers)

export default router;