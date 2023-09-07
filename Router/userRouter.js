import express from "express";
import { register } from "../Controllers/userController.js";
import { login } from "../Controllers/userController.js";
import { getMyDetail } from "../Controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { logout } from "../Controllers/userController.js";
import { deleteUser } from "../Controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuthenticated, getMyDetail);
router.get("/logout", logout);
router.route("/:id").delete(deleteUser);
export default router;
