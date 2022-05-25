import { AiTwotoneHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { ImProfile, ImUserPlus, ImFilesEmpty } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "home",
    path: "/",
    icon: <AiTwotoneHome />,
  },
  {
    id: 2,
    text: "all users",
    path: "all-users",
    icon: <FaUsers />,
  },
  {
    id: 3,
    text: "Student Group Requests",
    path: "studentrequsets",
    icon: <ImUserPlus />,
  },
  {
    id: 4,
    text: "Report Submissions",
    path: "reportsubmissions",
    icon: <ImFilesEmpty />,
  },
  {
    id: 5,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];

export default links;
