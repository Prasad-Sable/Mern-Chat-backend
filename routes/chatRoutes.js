import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { accessChat, addToGroup, createGroupChat, fetchChat, removeFromGroup, renameGroup } from "../controllers/chat.controller.js";


const router = Router()

router.route("/").post(protect,accessChat)
router.route("/").get(protect,fetchChat)
router.route("/group").post(protect,createGroupChat)
router.route("/rename").put(protect,renameGroup)
router.route("/groupRemove").put(protect,removeFromGroup)
router.route("/groupadd").put(protect,addToGroup)

export default router