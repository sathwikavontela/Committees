import express from "express";
import cors from "cors";
import InchargeRouter from "./routes/incharge.routes.js";
import DepartmentRouter from "./routes/departmentMember.routes.js";
import centralRouter from "./routes/centralMember.routes.js";
import messagesRouter from "./routes/messages.routes.js";
import cookieParser from "cookie-parser";
import complaintRouter from "./routes/complaintForm.routes.js";
import feedbackRouter from "./routes/feedbackForm.routes.js";
import noticeRouter from "./routes/notice.routes.js";
const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"], // Frontend domain
  credentials: true, // Allow credentials (cookies) to be sent
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/incharge", InchargeRouter);
app.use("/api/v1/department", DepartmentRouter);
app.use("/api/v1/central", centralRouter);
app.use("/api/v1/messages", messagesRouter);
app.use("/api/v1/complaints", complaintRouter);
app.use("/api/v1/feedbacks", feedbackRouter);
app.use("/api/v1/notices", noticeRouter);
export default app;
