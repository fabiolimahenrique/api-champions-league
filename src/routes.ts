import * as PlayerController from './controllers/players-controller';
import * as ClubController from './controllers/clubs-controllers'
import { Router } from "express";

const router = Router();

router.get("/players", PlayerController.getPlayers)
router.get("/players/:id", PlayerController.getPlayersId)
router.post("/players", PlayerController.postPlayers)
router.delete("/players/:id", PlayerController.deletePlayers)
router.patch("/players/:id", PlayerController.updatePlayers)


router.get("/clubs", ClubController.getClubs)

export default router;