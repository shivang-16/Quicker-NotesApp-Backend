import express from "express";
import { createNote } from "../Controllers/notesController.js";
import { getMyNotes } from "../Controllers/notesController.js";
import { updateNote } from "../Controllers/notesController.js";
import { deleteNote } from "../Controllers/notesController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", isAuthenticated, createNote);
router.get("/my", isAuthenticated, getMyNotes);
router.route("/:id").put(updateNote).delete(deleteNote);

export default router;
