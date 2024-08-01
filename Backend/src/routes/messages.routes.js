import { Router } from "express";
import {
  getMessages,
  createMessage,
  getDepartmentMessages,
  getCentralMessages,
  getCentralMembersChat,
  createMessageForCentral,
  getDepartmentMessagesForCentral,
} from "../controllers/messages.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
  verifyInchargeJWT,
} from "../middlewares/auth.middleware.js";
const router = Router();

//to fetch all the messages
router.route("/recive/messages").get(getMessages);

//to send message
router.route("/send/message").post(verifyDepartmentJWT, createMessage);

//to send message for central members
router
  .route("/send/messageForCentral")
  .post(verifyCentralJWT, createMessageForCentral);

//for department use
router
  .route("/get/departmentMessage")
  .get(verifyDepartmentJWT, getDepartmentMessages);

//for central use to get the central members messages
router.route("/get/centralMessage").get(verifyCentralJWT, getCentralMessages);

//get the department messages to fetch for the central
router
  .route("/get/departmentMessagesForCentral")
  .post(verifyCentralJWT, getDepartmentMessagesForCentral);

//get the department messages to fetch for the faculty
router
  .route("/get/departmentMessagesForCentral1")
  .post(verifyInchargeJWT, getDepartmentMessagesForCentral);

router.route("/get/centralMessage1").get(verifyInchargeJWT, getCentralMessages);

//get central members chat
router
  .route("/get/centralMembersChat")
  .get(verifyCentralJWT, getCentralMembersChat);
export default router;
