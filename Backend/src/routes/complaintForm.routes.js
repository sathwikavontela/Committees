import { Router } from "express";
import {
  createComplaint,
  getComplaintsForCentral,
  getComplaintsforDepartment,
  getparticularComplaint,
  updateComplaint,
} from "../controllers/ComplaintForm.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
  verifyInchargeJWT,
} from "../middlewares/auth.middleware.js";

const router = Router();

//create complaint in the user side
router.route("/create-complaint").post(createComplaint);

//update complaint in the department side
router.route("/update-complaint").post(verifyDepartmentJWT, updateComplaint);

//update complaint in the central side
router
  .route("/update-complaintForCentral")
  .post(verifyCentralJWT, updateComplaint);

//get the complaints for the department side
router
  .route("/get/ComplaintsForDepartment")
  .get(verifyDepartmentJWT, getComplaintsforDepartment);

//get the complaints for the central side
router
  .route("/get/ComplaintsForCentral")
  .get(verifyCentralJWT, getComplaintsForCentral);

router
  .route("/get/ComplaintsForCentral2")
  .get(verifyInchargeJWT, getComplaintsForCentral);

//get the particular complaint fro the department side
router
  .route("/get/particularComplaint/:complaintId")
  .get(verifyDepartmentJWT, getparticularComplaint);

//get the particular complaint for the central side
router
  .route("/get/particularComplaintForCentral/:complaintId")
  .get(verifyCentralJWT, getparticularComplaint);

router
  .route("/get/particularComplaintForIncharge/:complaintId")
  .get(verifyInchargeJWT, getparticularComplaint);
export default router;
