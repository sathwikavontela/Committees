import { Router } from "express";
import {
  createDepartmentMember,
  loginDepartmentMember,
  updateDepartmentMember,
  getCommitteMembers,
  fetchParticularDepartment,
  createBulk,
  fetchParticularDepartmentForCentral,
  logoutDepartment,
  getDepartmentMember,
} from "../controllers/departmentCommittee.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
  verifyInchargeJWT,
} from "../middlewares/auth.middleware.js";
const router = Router();

//for department creation
router.route("/signup").post(createDepartmentMember);

//for the department login
router.route("/login").post(loginDepartmentMember);

//updating the details of department
router.route("/update").post(verifyDepartmentJWT, updateDepartmentMember);

//for user level
router.route("/get/committeemembers").post(getCommitteMembers);

//for creating the credentials
router.route("/login1").post(createBulk);

//for department level
router
  .route("/get/committee/departmentMembers")
  .get(verifyDepartmentJWT, fetchParticularDepartment);

//for central members to fetch
router
  .route("/get/committee/departmentMembers1")
  .get(verifyCentralJWT, fetchParticularDepartmentForCentral);

router
  .route("/get/committee/departmentMembers2")
  .get(verifyInchargeJWT, fetchParticularDepartmentForCentral);

router
  .route("/get/departmentMember")
  .get(verifyDepartmentJWT, getDepartmentMember);

//logout the department user
router.route("/logout").get(verifyDepartmentJWT, logoutDepartment);
export default router;
