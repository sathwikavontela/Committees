import { Central } from "../models/centralMember.model.js";

const createcentralMember = async (req, res) => {
  try {
    //getting the inputs from the user
    const { username, password, fullName, department, committee_name, role } =
      req.body;

    //checking if all the fields are there or not
    if (!username || !password || !department || !committee_name) {
      return res
        .status(400)
        .json({ message: "All fields which are marked * are must" });
    }
    const existedDepartmentMember = await Central.findOne({ username });
    if (existedDepartmentMember)
      return res.status(400).json({ message: "you are already registered" });

    //creating the new admin
    const newDepartmentMember = await Central.create({
      fullName,
      username,
      password,
      department,
      committee_name,
      role,
    });

    // console.log(newDepartmentMember);
    //checking if the new Admin is created or not
    const createdDepartmentMember = await Central.findById(
      newDepartmentMember._id
    ).select("-password");
    if (!createdDepartmentMember) {
      return res.status(500).json({
        message: "Something went wrong while creating the central member",
      });
    }

    //all are correct
    return res
      .status(200)
      .json({ message: "New Department Member registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

const committees = [
  "academic",
  "amenities",
  "greening",
  "career",
  "cultural",
  "oppurtunities",
  "environment",
  "external",
  "grievance",
  "health",
  "hostel",
  "mess",
  "photography",
  "placement",
  "safety",
  "social",
  "sports",
  "innovation",
  "excellence",
]; // List of departments

const usersData = committees.flatMap((committee) =>
  Array.from({ length: 7 }, (_, index) => ({
    username: `central${committee}${index + 1}`,
    password: "rgukt123",
    committee_name: committee,
  }))
);

const createBulk = async (req, res) => {
  try {
    for (let userData of usersData) {
      // Assuming User.create() is a method to create users in your model
      await Central.create(userData);
      console.log(`Created user: ${userData.username}`);
    }
    console.log("Bulk user creation completed.");
    return res.status(200).json({ message: "completed" });
  } catch (error) {
    console.error("Error creating users:", error);
  }
};

const loginCentralMember = async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  if (!username || !password)
    return res.status(400).json({ message: "All fields are required" });
  const centralMember = await Central.findOne({ username });
  if (!centralMember)
    return res.status(400).json({ message: "you are not authorized" });
  const isPasswordValid = await centralMember.isPasswordCorrect(password);
  if (!isPasswordValid)
    return res.status(400).json({ message: "your password is not valid" });
  const centralToken = await centralMember.generateAccessToken();
  console.log(centralToken);
  const options = {
    httpOnly: true,
    secure: true, // Ensure this is true if using HTTPS
    sameSite: "None",
  };
  return res
    .status(200)
    .cookie("centralToken", centralToken, options)
    .json({ member: centralMember, centralToken });
};

const updateCentralMember = async (req, res) => {
  try {
    const { _id } = req.member;
    const { fullName, Id_number, department, password, image_url } = req.body;
    console.log(image_url);
    if (!fullName && !Id_number && !department && !password && !image_url) {
      return res
        .status(400)
        .json({ message: "atleast one change is required" });
    }
    let centralMember = await Central.findById(_id);
    if (fullName) centralMember.fullName = fullName;
    if (Id_number) centralMember.Id_number = Id_number;
    if (department) centralMember.department = department;
    if (password) centralMember.password = password;
    if (image_url) centralMember.image_url = image_url;
    console.log(centralMember.image_url)
    await centralMember.save();
    return res
      .status(200)
      .json({ message: "updated successfully", member: centralMember });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getcentralCommitteMembers = async (req, res) => {
  try {
    const { committee_name } = req.body;
    console.log(committee_name);
    if (!committee_name)
      return res.status(400).json({ message: "committee name is required" });
    const MembersArray = await Central.find({ committee_name });
    if (!MembersArray)
      return res.status(400).json({ message: "no records found" });
    return res.status(200).json({ MembersArray });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getCentralMembersByLogin = async (req, res) => {
  try {
    // console.log(req.member);
    const { committee_name } = req.member;
    //we will get the details of the department member from the token
    if (!committee_name)
      return res.status(400).json({ message: "you are not login" });
    const MembersArray = await Central.find({ committee_name });
    if (!MembersArray)
      return res.status(400).json({ message: "No members are found" });
    return res.status(200).json({ MembersArray });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const logoutCentral = async (req, res) => {
  //console.log(req.user);
  await Central.findByIdAndUpdate(req.member._id);
  const options = {
    path: "/",
    secure: true,
    sameSite: "None",
  };
  return res
    .status(200)
    .clearCookie("centralToken", options)
    .json({ message: "Logged out successfully" });
  // .json({
  //   tokens: { accessToken, refreshToken },
  // });
};

export {
  createcentralMember,
  loginCentralMember,
  updateCentralMember,
  getcentralCommitteMembers,
  getCentralMembersByLogin,
  logoutCentral,
  createBulk,
};
