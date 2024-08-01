import React from "react";
import SportsHeader from "./SportsHeader.js";
import SportsSidebar from "./SportsSidebar.js";
import CommitteeCard from "../CommitteeCard";
const cardData = {
  name: "Sports Committee",
  complaintForm: "/sportscommitteeform",
  purPose:
    "The Sports Committee is committed to promoting a culture of physical fitness and sportsmanship among students. Through organizing inter-house and inter-college sports events, managing sports facilities and equipment, and identifying talent across various sports, the committee aims to foster a competitive yet supportive environment. By nurturing talent and encouraging participation, the committee plays a pivotal role in enhancingthe overall well-being and sporting achievements of the student body.",
  rolesAndResponsibilities: [
    "Organize inter-house or inter-college sports events and tournaments.",
    "Manage sports facilities and equipment",
    "Identify and nurture talent in various sports.",
    "Promote physical fitness and sportsmanship among students.",
  ],
  categories: [
    "Inter-house/Inter-college Sports Events",
    "Sports Facilities and Equipment",
    "Talent Identification",
    "Promotion of Physical Fitness",
    "other",
  ],
  committee_name: "sports",
};
const Sports = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <SportsHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <div className="w-2/12">
          <SportsSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  );
};

export default Sports;
