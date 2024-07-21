import express from "express";
import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  allMessages,
  sendMessages,
} from "../controllers/message.controller.js";

const router = Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessages);

export default router;
