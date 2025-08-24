import { getPlayers } from './controllers/players-controller';
import { Router } from "express";

const router = Router();

router.get("/players", getPlayers)

export default router;