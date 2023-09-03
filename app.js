import express from "express";
import userRouter from "./Router/userRouter.js";
import notesRouter from "./Router/notesRouter.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import { config } from "dotenv";
import cors from "cors";

export const app = express();

config({
  path: "./Data/config.env",
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/notes", notesRouter);

app.get("/", (req, res) => {
  res.send("This is the notes app on the cloud");
});

app.use(errorMiddleware);
