import { Router } from "express";
import { createNotice, showNotices } from "../controllers/notice.controller.js";
import { verifyInchargeJWT } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/create-notice").post(verifyInchargeJWT, createNotice);
router.route("/get/notices").get(showNotices);
export default router;
