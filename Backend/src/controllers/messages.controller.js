import { Central } from "../models/centralMember.model.js";
import { Department } from "../models/departmentCommittee.model.js";
import { Message } from "../models/messages.model.js";

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    if (!messages)
      return res.status(400).json({ message: "No messages found" });
    // console.log(messages);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

const createMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { role } = req.member;

    //console.log(message)
    if (!message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    //console.log(req.member)
    const { _id, department, committee_name } = req.member;
    const members = await Department.find({ department, committee_name });

    const userIds = members.map((member) => member._id);

    const newMessage = await Message.create({
      message,
      sender_id: _id,
      department,
      committee_name,
      role,
      user_ids: userIds,
    });
    if (!newMessage) {
      return res.status(500).json({ message: "unable to send message" });
    }
    return res.status(200).json({ newMessage });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const createMessageForCentral = async (req, res) => {
  try {
    const { message } = req.body;
    const { role } = req.member;

    //console.log(message)
    if (!message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    //console.log(req.member)
    const { _id, committee_name, department } = req.member;
    const members = await Central.find({ committee_name });

    const userIds = members.map((member) => member._id);

    const newMessage = await Message.create({
      message,
      sender_id: _id,
      department,
      committee_name,
      role,
      user_ids: userIds,
    });
    if (!newMessage) {
      return res.status(500).json({ message: "unable to send message" });
    }
    return res.status(200).json({ newMessage });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getDepartmentMessages = async (req, res) => {
  try {
    //console.log(req);
    const { department, committee_name } = req.member;
    // console.log(`logged department ${department} to get the department messages ${committee_name}`)
    if (!department) {
      return res.status(400).json({ message: "you are not logged in" });
    }
    const messages = await Message.find({
      department,
      committee_name,
      role: "department",
    });
    if (!messages)
      return res.status(400).json({ message: "Messages are not found" });
    return res.status(200).json({ messages });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getDepartmentMessagesForCentral = async (req, res) => {
  try {
    //console.log(req);
    const { committee_name } = req.member;
    const { department } = req.body;
    // console.log(`logged department ${department} to get the department messages ${committee_name}`)
    if (!department) {
      return res.status(400).json({ message: "department is requierd" });
    }
    const messages = await Message.find({
      department,
      committee_name,
      role: "department",
    });
    if (!messages)
      return res.status(400).json({ message: "Messages are not found" });
    return res.status(200).json({ messages });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getCentralMessages = async (req, res) => {
  // console.log("central message requestd");
  try {
    const { committee_name } = req.member;
    const messages = await Message.find({
      committee_name,
      role: "central",
    });
    if (!messages)
      return res.status(400).json({ message: "Messages are not found" });
    // console.log(messages);
    return res.status(200).json({ messages });
  } catch (error) {
    // console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

const getCentralMembersChat = async (req, res) => {
  try {
    const { committee_name, role } = req.member;
    const messages = await Message.find({
      committee_name,
      role,
    });
    if (!messages)
      return res.status(400).json({ message: "Messages are not found" });
    //console.log(messages);
    return res.status(200).json({ messages });
  } catch (error) {
    //console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

export {
  getMessages,
  createMessage,
  getDepartmentMessages,
  getCentralMessages,
  getCentralMembersChat,
  createMessageForCentral,
  getDepartmentMessagesForCentral,
};
