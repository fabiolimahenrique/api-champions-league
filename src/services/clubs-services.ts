import { findAllClubs } from "../repositories/clubs-repository"
import { ok } from "../utils/http-helper"


export const getClubServices = async () => {
  const data = await findAllClubs();
  return ok(data)
}