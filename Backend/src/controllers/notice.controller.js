import { Notice } from "../models/notice.model.js";

const createNotice = async (req, res) => {
  try {
    const { committee_name } = req.member;
    const { subject, description } = req.body;
    if (!subject || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const notice = await Notice.create({
      committee_name,
      subject,
      description,
    });
    if (!notice) {
      return res
        .status(400)
        .json({ message: "Error occured while submitting" });
    }
    return res.status(200).json({ message: "notice created successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const showNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    if (!notices) {
      return res.status(400).json({ message: "No notices found" });
    }
    notices.reverse();
    return res.status(200).json({ notices });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { createNotice, showNotices };
