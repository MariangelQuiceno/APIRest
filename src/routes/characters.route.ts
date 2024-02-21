import { Router } from "express";
import * as characterController from "../controllers/characters.controller";

const router = Router();

// GET all products
router.get("/", characterController.getCharacters);

// GET one product
router.get("/:id", characterController.getCharacterByID);

// POST create product
router.post("/", characterController.createNewCharacter);

// PUT update product
router.put("/:id", characterController.updatedCharacter);

// DELETE product
router.delete("/:id", characterController.deleteCharacter);

export default router;