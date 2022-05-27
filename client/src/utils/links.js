import { AiTwotoneHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { ImProfile, ImUserPlus, ImFilesEmpty, ImPlus } from "react-icons/im";
import { BiGroup } from "react-icons/bi";
import {
  AiOutlineUsergroupAdd,
  AiOutlineFileAdd,
  AiOutlineUpload,
} from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

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
    text: "Report & Submissions",
    path: "reportsubmissions",
    icon: <ImFilesEmpty />,
  },
  {
    id: 5,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    id: 6,
    text: "supervise",
    path: "supervise",
    icon: <ImPlus />,
  },
  {
    id: 7,
    text: "upload documents",
    path: "upload-docs",
    icon: <MdOutlineDriveFolderUpload />,
  },
  {
    id: 8,
    text: "student groups",
    path: "student-groups",
    icon: <AiOutlineUsergroupAdd />,
  },
  {
    id: 9,
    text: "All student groups",
    path: "all-student-groups",
    icon: <BiGroup />,
  },
  {
    id: 10,
    text: "staff members",
    path: "staff-members",
    icon: <GiTeacher />,
  },
  {
    id: 11,
    text: "Submissions",
    path: "submissions",
    icon: <AiOutlineUpload />,
  },
  {
    id: 12,
    text: "create submissions",
    path: "create-submissions",

    icon: <AiOutlineFileAdd />,
  },
  {
    id: 13,
    text: "supervisors",
    path: "supervisors",
    icon: <BiGroup />,
  },
  {
    id: 14,
    text: "requests",
    path: "student-research-request",
    icon: <BiGroup />,
  },
  {
    id: 15,
    text: "co-supervisors",
    path: "co-supervisors",
    icon: <BiGroup />,
  },  
  {
    id: 16,
    text: "Supervisor Home",
    path: "supervisorhome",
    icon: <AiTwotoneHome />,
  },
  {
    id: 16,
    text: "Supervisor Group",
    path: "supervisorgroup",
    icon: <FaUsers />,
  },
];

export default links;
