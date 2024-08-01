import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Home";
import Acadamic from "./components/Commities/Acadamic";
import CampusGreening from "./components/Commities/CampusGreening";
import CampusAmenties from "./components/Commities/CampusAmenties";
import Career from "./components/Commities/Career";
import Cultural from "./components/Commities/Cultural";
import Education from "./components/Commities/Education";
import Environment from "./components/Commities/Environment";
import External from "./components/Commities/External";
import Grievance from "./components/Commities/Grievance";
import Health from "./components/Commities/Health";
import Hostel from "./components/Commities/Hostel";
import Innovation from "./components/Commities/Innovation";
import Mess from "./components/Commities/Mess";
import Photography from "./components/Commities/Photography";
import Placement from "./components/Commities/Placement";
import Safety from "./components/Commities/Safety";
import Social from "./components/Commities/Social";
import Sports from "./components/Commities/Sports";
//second level imports
import CampusAmentiesCentralAuthority from "./components/Commities/CampusAmenties/CampusAmentiesCentralAuthority";
import CampusAmentiesFacultyIncarge from "./components/Commities/CampusAmenties/CampusAmentiesFacultyIncarge";
import CampusAmentiesStudentCommittee from "./components/Commities/CampusAmenties/CampusAmentiesStudentCommittee.js";
import CampusGreeningFacultyIncarge from "./components/Commities/CampusGreening/CampusGreeningFacultyIncharge.js";
import CampusGreeningCentralAuthority from "./components/Commities/CampusGreening/CampusGreeningCentralAuthority.js";
import CampusGreeningStudentCommittee from "./components/Commities/CampusGreening/CampusGreeningStudentCommittees.js";
import CareerCentralAuthority from "./components/Commities/Career/CareerCentralAuthority.js";
import CareerFacultyIncarge from "./components/Commities/Career/CareerFacultyIncharge.js";
import CareerStudentCommittee from "./components/Commities/Career/CareerStudentCommittees.js";
import CulturalCentralAuthority from "./components/Commities/Cultural/CulturalCentralAuthority.js";
import CulturalFacultyIncarge from "./components/Commities/Cultural/CulturalFacultyIncharge.js";
import CulturalStudentCommittee from "./components/Commities/Cultural/CulturalStudentCommittees.js";
import EducationCentralAuthority from "./components/Commities/Education/EducationCentralAuthority.js";
import EducationFacultyIncarge from "./components/Commities/Education/EducationFacultyIncharge.js";
import EducationStudentCommittee from "./components/Commities/Education/EducationStudentCommittees.js";
import EnvironmentCentralAuthority from "./components/Commities/Environment/EnvironmentCentralAuthority.js";
import EnvironmentFacultyIncarge from "./components/Commities/Environment/EnvironmentFacultyIncharge.js";
import EnvironmentStudentCommittee from "./components/Commities/Environment/EnvironmentStudentCommittees.js";
import ExternalCentralAuthority from "./components/Commities/External/ExternalCentralAuthority.js";
import ExternalFacultyIncarge from "./components/Commities/External/ExternalFacultyIncharge.js";
import ExternalStudentCommittee from "./components/Commities/External/ExternalStudentCommittees.js";
import GrievanceCentralAuthority from "./components/Commities/Grievance/GrievanceCentralAuthority.js";
import GrievanceFacultyIncarge from "./components/Commities/Grievance/GrievanceFacultyIncharge.js";
import GrievanceStudentCommittee from "./components/Commities/Grievance/GrievanceStudentCommittees.js";
import HealthCentralAuthority from "./components/Commities/Health/HealthCentralAuthority.js";
import HealthFacultyIncarge from "./components/Commities/Health/HealthFacultyIncharge.js";
import HealthStudentCommittee from "./components/Commities/Health/HealthStudentCommittees.js";
import HostelCentralAuthority from "./components/Commities/Hostel/HostelCentralAuthority.js";
import HostelFacultyIncarge from "./components/Commities/Hostel/HostelFacultyIncharge.js";
import HostelStudentCommittee from "./components/Commities/Hostel/HostelStudentCommittees.js";
import InnovationCentralAuthority from "./components/Commities/Innovation/InnovationCentralAuthority.js";
import InnovationFacultyIncarge from "./components/Commities/Innovation/InnovationFacultyIncharge.js";
import InnovationStudentCommittee from "./components/Commities/Innovation/InnovationStudentCommittees.js";
import MessCentralAuthority from "./components/Commities/Mess/MessCentralAuthority.js";
import MessFacultyIncarge from "./components/Commities/Mess/MessFacultyIncharge.js";
import MessStudentCommittee from "./components/Commities/Mess/MessStudentCommittees.js";
import PhotographyCentralAuthority from "./components/Commities/Photography/PhotographyCentralAuthority.js";
import PhotographyFacultyIncarge from "./components/Commities/Photography/PhotographyFacultyIncharge.js";
import PhotographyStudentCommittee from "./components/Commities/Photography/PhotographyStudentCommittees.js";
import PlacementCentralAuthority from "./components/Commities/Placement/PlacementCentralAuthority.js";
import PlacementFacultyIncarge from "./components/Commities/Placement/PlacementFacultyIncharge.js";
import PlacementStudentCommittee from "./components/Commities/Placement/PlacementStudentCommittees.js";
import SafetyCentralAuthority from "./components/Commities/Safety/SafetyCentralAuthority.js";
import SafetyFacultyIncarge from "./components/Commities/Safety/SafetyFacultyIncharge.js";
import SafetyStudentCommittee from "./components/Commities/Safety/SafetyStudentCommittees.js";

import AcadamicCentralAuthority from "./components/Commities/Acadamic/AcademicCentralAuthority.js";
import AcadamicFacultyIncarge from "./components/Commities/Acadamic/AcademicFacultyIncarge.js";
import AcadamicStudentCommittee from "./components/Commities/Acadamic/StudentCommittee";

import SportsCentralAuthority from "./components/Commities/Sports/SportsCentralAuthority.js";
import SportsStudentCommittee from "./components/Commities/Sports/SportsStudentCommittee.js";
import SportsFacultyIncarge from "./components/Commities/Sports/SportsFacultyIncarge.js";
import SocialCentralAuthority from "./components/Commities/Social/SocialCentralAuthority.js";
import SocialFacultyIncarge from "./components/Commities/Social/SocialFacultyIncharge.js";
import SocialStudentCommittee from "./components/Commities/Social/StudentCommittees.js";
import FormCard from "./components/forms/FormCard.js";
import CentralAuthority from "./components/central/CentralAuthorityContents/CentralAuthority.js";
import CentralAuthorityFIC from "./components/central/CentralAuthorityContents/CentralAuthorityFIC.js";
import CentralAuthorityStudentCommittee from "./components/central/CentralAuthorityContents/CentralAuthorityStudentCommittee.js";

import Departments from "./components/DepartmentLevel/index.js";
import DepartmentMembers from "./components/DepartmentLevel/DepartmentMembers.js";
import DepartmentFacultymember from "./components/DepartmentLevel/DepartmentFacultymember.js";
import DepartmentCentralAuthority from "./components/DepartmentLevel/DepartmentCentralAuthority.js";
import Loginform from "./components/forms/Loginform.js";

import CompalintDetails from "./components/DepartmentLevel/CompalintDetails.js";
import ComplaintDetails from "./components/central/ComplaintDetails.js";
import FeedbackForm from "./components/forms/FeedbackForm.js";
import DepartmentChatbox from "./components/DepartmentLevel/DepartmentChatbox.js";
import CentralChatBoxSection from "./components/central/CentralChatBoxSection/index.js";
import CentralCseChatBoxSection from "./components/central/CentralChatBoxSection/CentralCseChatbox.js";
import CentralEceChatBoxSection from "./components/central/CentralChatBoxSection/CentralEceChatBoxSection.js";
import CentralEeeChatBoxSection from "./components/central/CentralChatBoxSection/CentralEeeChatBoxSection.js";
import CentralCivilChatBoxSection from "./components/central/CentralChatBoxSection/CentralCivilChatBoxSection.js";
import CentralMechChatBoxSection from "./components/central/CentralChatBoxSection/CentralMechChatBoxSection.js";
import CentralChemChatBoxSection from "./components/central/CentralChatBoxSection/CentralChemChatBoxSection.js";
import CentralMmeChatBoxSection from "./components/central/CentralChatBoxSection/CentralMmeChatBoxSection.js";
import Excellence from "./components/Commities/Excellence/index.js";
import ExcellenceStudentCommittees from "./components/Commities/Excellence/ExcellenceStudentCommittees.js";
import ExcellenceCentralAuthority from "./components/Commities/Excellence/ExcellenceCentralAuthority.js";
import ExcellenceFacultyIncarge from "./components/Commities/Excellence/ExcellenceFacultyIncharge.js";
import Footer from "./components/footer/Footer.js";
import Departmentfeedbacks from "./components/DepartmentLevel/Departmentfeedbacks.js";

import CentralHomesection from "./components/central/Home/index.js";
import FacultyIchargeLevel from "./components/FacultyInchargeLevel/index.js";
import FicFacultyMembers from "./components/FacultyInchargeLevel/FicFacultyMembers.js";
import FicStudentCommittee from "./components/FacultyInchargeLevel/FicStudentCommittee.js";
import FicCentralAuthority from "./components/FacultyInchargeLevel/FicCentralAuthority.js";
import CentralMembersChatBox from "./components/central/CentralMembersChatBox.js";
import FacultyMmechatBox from "./components/FacultyInchargeLevel/ChatBoxes/FacultyMmechatBox.js";
import FacultyChemchatBox from "./components/FacultyInchargeLevel/ChatBoxes/FacultyChemchatBox.js";
import FacultyMechchatBox from "./components/FacultyInchargeLevel/ChatBoxes/FacultyMechchatBox.js";
import FacultyCivilchatBox from "./components/FacultyInchargeLevel/ChatBoxes/FacultyCivilchatBox.js";
import FacultyEcechatBox from "./components/FacultyInchargeLevel/ChatBoxes/FacultyEcechatBox.js";
import FacultyEeechatBox from "./components/FacultyInchargeLevel/ChatBoxes/FacultyEeechatBox.js";
import FacultyCsechatBox from "./components/FacultyInchargeLevel/ChatBoxes/FacultyCsechatBox.js";

import FicComplaintDetails from "./components/FacultyInchargeLevel/FicComplaintDetails.js";
import NoticeBoard from "./components/Noticeboard/index.js";
import CentralAuthorityFeedback from "./components/central/CentralAuthorityContents/CentralAuthorityFeedback.js";
import FicFeedback from "./components/FacultyInchargeLevel/FicFeedback.js";
import EditProfile from "./components/DepartmentLevel/EditProfile.js";
import EditProfileFI from "./components/FacultyInchargeLevel/EditProfileFI.js";
import AddNotice from "./components/FacultyInchargeLevel/AddNotice.js";
import EditProfileC from "./components/central/EditProfileC.js";
import DepartmentProtected from "./components/ProtectedRoutes/DepartmentProtected.js";
import CentralProtected from "./components/ProtectedRoutes/CentralProtected.js";
import FacultyProtected from "./components/ProtectedRoutes/FacultyProtected.js";
import CentralChatBox from "./components/FacultyInchargeLevel/CentralChatBox.js";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* first level routes */}
      <Route exact path="/" Component={Homepage} />
      <Route exact path="/academic" Component={Acadamic} />
      <Route exact path="/campusamenties" Component={CampusAmenties} />
      <Route exact path="/campusgreening" Component={CampusGreening} />
      <Route exact path="/career" Component={Career} />
      <Route exact path="/cultural" Component={Cultural} />
      <Route exact path="/educational" Component={Education} />
      <Route exact path="/environment" Component={Environment} />
      <Route exact path="/external" Component={External} />
      <Route exact path="/grievance" Component={Grievance} />
      <Route exact path="/health" Component={Health} />
      <Route exact path="/hostel" Component={Hostel} />
      <Route exact path="/innovation" Component={Innovation} />
      <Route exact path="/mess" Component={Mess} />
      <Route exact path="/photography" Component={Photography} />
      <Route exact path="/placement" Component={Placement} />
      <Route exact path="/safety" Component={Safety} />
      <Route exact path="/social" Component={Social} />
      <Route exact path="/sports" Component={Sports} />
      <Route exact path="/excellence" Component={Excellence} />
      <Route exact path="/noticeboard" Component={NoticeBoard} />
      <Route exact path="/departmenteditProfile" Component={EditProfile} />
      <Route exact path="/centraleditprofile" Component={EditProfileC} />
      {/* //second level routes*/}
      {/* Department Related protected routes*/}
      <Route
        exact
        path="/departments"
        element={<DepartmentProtected element={Departments} />}
      />
      <Route
        exact
        path="/department/departmentmembers"
        element={<DepartmentProtected element={DepartmentMembers} />}
      />
      <Route
        exact
        path="/department/facultyincharge"
        element={<DepartmentProtected element={DepartmentFacultymember} />}
      />
      <Route
        exact
        path="/department/centralauthority"
        element={<DepartmentProtected element={DepartmentCentralAuthority} />}
      />
      <Route
        exact
        path="/departmentfeedbacks"
        element={<DepartmentProtected element={Departmentfeedbacks} />}
      />
      <Route
        exact
        path="/departmentmembersChatbox"
        element={<DepartmentProtected element={DepartmentChatbox} />}
      />
      <Route
        exact
        path="/department/complaint/:complaintId"
        element={<DepartmentProtected element={CompalintDetails} />}
      />

      <Route
        exact
        path="/academic/centralaurhority"
        Component={AcadamicCentralAuthority}
      />
      <Route
        exact
        path="/academic/facultyincarge"
        Component={AcadamicFacultyIncarge}
      />
      <Route
        exact
        path="/academic/studentcommitte"
        Component={AcadamicStudentCommittee}
      />
      <Route
        exact
        path="/excellence/studentcommitte"
        Component={ExcellenceStudentCommittees}
      />
      <Route
        exact
        path="/excellence/centralaurhority"
        Component={ExcellenceCentralAuthority}
      />
      <Route
        exact
        path="/excellence/facultyincarge"
        Component={ExcellenceFacultyIncarge}
      />
      <Route
        exact
        path="/campusamenties/centralaurhority"
        Component={CampusAmentiesCentralAuthority}
      />
      <Route
        exact
        path="/campusamenties/facultyincarge"
        Component={CampusAmentiesFacultyIncarge}
      />
      <Route
        exact
        path="/campusamenties/studentcommitte"
        Component={CampusAmentiesStudentCommittee}
      />
      <Route
        exact
        path="/campusgreening/centralaurhority"
        Component={CampusGreeningCentralAuthority}
      />
      <Route
        exact
        path="/campusgreening/facultyincarge"
        Component={CampusGreeningFacultyIncarge}
      />
      <Route
        exact
        path="/campusgreening/studentcommitte"
        Component={CampusGreeningStudentCommittee}
      />

      <Route
        exact
        path="/career/centralaurhority"
        Component={CareerCentralAuthority}
      />
      <Route
        exact
        path="/career/facultyincarge"
        Component={CareerFacultyIncarge}
      />
      <Route
        exact
        path="/career/studentcommitte"
        Component={CareerStudentCommittee}
      />

      <Route
        exact
        path="/cultural/centralaurhority"
        Component={CulturalCentralAuthority}
      />
      <Route
        exact
        path="/cultural/facultyincarge"
        Component={CulturalFacultyIncarge}
      />
      <Route
        exact
        path="/cultural/studentcommitte"
        Component={CulturalStudentCommittee}
      />

      <Route
        exact
        path="/educational/centralaurhority"
        Component={EducationCentralAuthority}
      />
      <Route
        exact
        path="/educational/facultyincarge"
        Component={EducationFacultyIncarge}
      />
      <Route
        exact
        path="/educational/studentcommitte"
        Component={EducationStudentCommittee}
      />

      <Route
        exact
        path="/environment/centralaurhority"
        Component={EnvironmentCentralAuthority}
      />
      <Route
        exact
        path="/environment/facultyincarge"
        Component={EnvironmentFacultyIncarge}
      />
      <Route
        exact
        path="/environment/studentcommitte"
        Component={EnvironmentStudentCommittee}
      />

      <Route
        exact
        path="/external/centralaurhority"
        Component={ExternalCentralAuthority}
      />
      <Route
        exact
        path="/external/facultyincarge"
        Component={ExternalFacultyIncarge}
      />
      <Route
        exact
        path="/external/studentcommitte"
        Component={ExternalStudentCommittee}
      />

      <Route
        exact
        path="/grievance/centralaurhority"
        Component={GrievanceCentralAuthority}
      />
      <Route
        exact
        path="/grievance/facultyincarge"
        Component={GrievanceFacultyIncarge}
      />
      <Route
        exact
        path="/grievance/studentcommitte"
        Component={GrievanceStudentCommittee}
      />

      <Route
        exact
        path="/health/centralaurhority"
        Component={HealthCentralAuthority}
      />
      <Route
        exact
        path="/health/facultyincarge"
        Component={HealthFacultyIncarge}
      />
      <Route
        exact
        path="/health/studentcommitte"
        Component={HealthStudentCommittee}
      />

      <Route
        exact
        path="/hostel/centralaurhority"
        Component={HostelCentralAuthority}
      />
      <Route
        exact
        path="/hostel/facultyincarge"
        Component={HostelFacultyIncarge}
      />
      <Route
        exact
        path="/hostel/studentcommitte"
        Component={HostelStudentCommittee}
      />

      <Route
        exact
        path="/innovation/centralaurhority"
        Component={InnovationCentralAuthority}
      />
      <Route
        exact
        path="/innovation/facultyincarge"
        Component={InnovationFacultyIncarge}
      />
      <Route
        exact
        path="/innovation/studentcommitte"
        Component={InnovationStudentCommittee}
      />
      {/* feedbackRoutes */}
      <Route
        exact
        path="/mess/centralaurhority"
        Component={MessCentralAuthority}
      />
      <Route exact path="/mess/facultyincarge" Component={MessFacultyIncarge} />
      <Route
        exact
        path="/mess/studentcommitte"
        Component={MessStudentCommittee}
      />

      <Route
        exact
        path="/photography/centralaurhority"
        Component={PhotographyCentralAuthority}
      />
      <Route
        exact
        path="/photography/facultyincarge"
        Component={PhotographyFacultyIncarge}
      />
      <Route
        exact
        path="/photography/studentcommitte"
        Component={PhotographyStudentCommittee}
      />

      <Route
        exact
        path="/placement/centralaurhority"
        Component={PlacementCentralAuthority}
      />
      <Route
        exact
        path="/placement/facultyincarge"
        Component={PlacementFacultyIncarge}
      />
      <Route
        exact
        path="/placement/studentcommitte"
        Component={PlacementStudentCommittee}
      />

      <Route
        exact
        path="/safety/centralaurhority"
        Component={SafetyCentralAuthority}
      />
      <Route
        exact
        path="/safety/facultyincarge"
        Component={SafetyFacultyIncarge}
      />
      <Route
        exact
        path="/safety/studentcommitte"
        Component={SafetyStudentCommittee}
      />

      <Route
        exact
        path="/social/centralaurhority"
        Component={SocialCentralAuthority}
      />
      <Route
        exact
        path="/social/facultyincarge"
        Component={SocialFacultyIncarge}
      />
      <Route
        exact
        path="/social/studentcommitte"
        Component={SocialStudentCommittee}
      />

      <Route
        exact
        path="/sports/centralaurhority"
        Component={SportsCentralAuthority}
      />
      <Route
        exact
        path="/sports/facultyincarge"
        Component={SportsFacultyIncarge}
      />
      <Route
        exact
        path="/sports/studentcommitte"
        Component={SportsStudentCommittee}
      />
      <Route exact path="/login" Component={Loginform} />

      {/* committee members routes */}

      {/* Form Routes */}

      <Route exact path="/formcard" Component={FormCard} />
      <Route exact path="/feedbackform" Component={FeedbackForm} />

      {/* Third Level UI => For Central Authority */}
      {/* Central level Protected Routes*/}
      <Route
        exact
        path="/centralAuthorityHome"
        element={<CentralProtected element={CentralHomesection} />}
      />
      <Route
        exact
        path="/central/facultyIncharge"
        element={<CentralProtected element={CentralAuthorityFIC} />}
      />
      <Route
        exact
        path="/central/centralauthority"
        element={<CentralProtected element={CentralAuthority} />}
      />
      <Route
        exact
        path="/central/studentcommittee"
        element={
          <CentralProtected element={CentralAuthorityStudentCommittee} />
        }
      />
      <Route
        exact
        path="/centralmemberschatbox"
        element={<CentralProtected element={CentralMembersChatBox} />}
      />
      <Route
        exact
        path="/central/csechatbox"
        element={<CentralProtected element={CentralCseChatBoxSection} />}
      />
      <Route
        exact
        path="/central/ecechatbox"
        element={<CentralProtected element={CentralEceChatBoxSection} />}
      />
      <Route
        exact
        path="/central/eeechatbox"
        element={<CentralProtected element={CentralEeeChatBoxSection} />}
      />
      <Route
        exact
        path="/central/civilchatbox"
        element={<CentralProtected element={CentralCivilChatBoxSection} />}
      />
      <Route
        exact
        path="/central/mechchatbox"
        element={<CentralProtected element={CentralMechChatBoxSection} />}
      />
      <Route
        exact
        path="/central/chemchatbox"
        element={<CentralProtected element={CentralChemChatBoxSection} />}
      />
      <Route
        exact
        path="/central/mmechatbox"
        element={<CentralProtected element={CentralMmeChatBoxSection} />}
      />
      <Route
        exact
        path="/central/feedbacks"
        element={<CentralProtected element={CentralAuthorityFeedback} />}
      />
      <Route
        exact
        path="/central/complaint/:complaintId"
        element={<CentralProtected element={ComplaintDetails} />}
      />
      <Route
        exact
        path="/centralchatboxsection"
        Component={CentralChatBoxSection}
      />
      {/*Footer */}
      <Route exact path="/footer" Component={Footer} />

      {/* Faculty Incharge Level */}
      {/* Faculty Protected Routes */}
      <Route
        exact
        path="/facultyInchargeHome"
        element={<FacultyProtected element={FacultyIchargeLevel} />}
      />
      <Route
        exact
        path="/facultyIncharge/facultyMembers"
        element={<FacultyProtected element={FicFacultyMembers} />}
      />
      <Route
        exact
        path="/incharge/complaint/:complaintId"
        element={<FacultyProtected element={FicComplaintDetails} />}
      />
      <Route
        exact
        path="/facultyIncharge/studentcommittee"
        element={<FacultyProtected element={FicStudentCommittee} />}
      />
      <Route
        exact
        path="/facultyIncharge/centralauthority-members"
        element={<FacultyProtected element={FicCentralAuthority} />}
      />
      <Route
        exact
        path="/facultyIncharge/editprofile"
        element={<FacultyProtected element={EditProfileFI} />}
      />
      <Route
        exact
        path="/facultyIncharge/feedbacks"
        element={<FacultyProtected element={FicFeedback} />}
      />
      <Route
        exact
        path="/faculty/csechatbox"
        element={<FacultyProtected element={FacultyCsechatBox} />}
      />
      <Route
        exact
        path="/faculty/ecechatbox"
        element={<FacultyProtected element={FacultyEcechatBox} />}
      />
      <Route
        exact
        path="/faculty/eeechatbox"
        element={<FacultyProtected element={FacultyEeechatBox} />}
      />
      <Route
        exact
        path="/faculty/civilchatbox"
        element={<FacultyProtected element={FacultyCivilchatBox} />}
      />
      <Route
        exact
        path="/faculty/mechchatbox"
        element={<FacultyProtected element={FacultyMechchatBox} />}
      />
      <Route
        exact
        path="/faculty/chemchatbox"
        element={<FacultyProtected element={FacultyChemchatBox} />}
      />
      <Route
        exact
        path="/faculty/mmechatbox"
        element={<FacultyProtected element={FacultyMmechatBox} />}
      />
      <Route
        exact
        path="/faculty/sendnotice"
        element={<FacultyProtected element={AddNotice} />}
      />
      <Route
        exact
        path="/faculty/feedbacks"
        element={<FacultyProtected element={FicFeedback} />}
      />
      <Route
        exact
        path="/facultyIncharge/centralDiscussionForum"
        element={<FacultyProtected element={CentralChatBox} />}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
