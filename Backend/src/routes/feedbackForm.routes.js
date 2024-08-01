import { Router } from "express";
import {
  createFeedback,
  getFeedbacksForCentral,
  getFeedbacksForDepartment,
} from "../controllers/feedbackForm.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
  verifyInchargeJWT,
} from "../middlewares/auth.middleware.js";
const router = Router();

//create feedback in the user side
router.route("/create-feedback").post(createFeedback);

//get the feedbacks for the department side
router
  .route("/get/feedbacksForDepartment")
  .get(verifyDepartmentJWT, getFeedbacksForDepartment);

//get the feedbacks for the central side
router
  .route("/get/feedbacksForCentral")
  .get(verifyCentralJWT, getFeedbacksForCentral);

//get the feedbacks for the incharge side
router
  .route("/get/feedbacksForCentral1")
  .get(verifyInchargeJWT, getFeedbacksForCentral);

export default router;
