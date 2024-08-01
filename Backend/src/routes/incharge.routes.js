import { Router } from "express";
import {
  createBulk,
  // createBulk,
  createIncharge,
  getIncharge,
  getIncharge1,
  getInchargeForUser,
  loginIncharge,
  logoutIncharge,
  updateInchargeMember,
} from "../controllers/incharge.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
  verifyInchargeJWT,
} from "../middlewares/auth.middleware.js";
const router = Router();

//create incharge
router.route("/signup").post(createBulk);

//login incharge
router.route("/login").post(loginIncharge);

//update incharge
router.route("/update").post(verifyInchargeJWT, updateInchargeMember);

//for incharge level
router.route("/get-incharge").get(verifyInchargeJWT, getIncharge);

//for department level
router.route("/get-incharge1").get(verifyDepartmentJWT, getIncharge1);

//for user level
router.route("/get-inchargeforuser").post(getInchargeForUser);

// for central level
router.route("/get-incharge2").get(verifyCentralJWT, getIncharge1);
// router.route("/login-incharge1").post(createBulk);

//logout incharge
router.route("/logout").get(verifyInchargeJWT, logoutIncharge);
export default router;
