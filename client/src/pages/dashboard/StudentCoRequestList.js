import React from "react";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import StudentReqForCoSupervisor from "../../components/StudentReqForCoSupervisor";
import Wrapper from "../../assets/wrappers/JobsContainer";

const StudentCoRequestList = () => {

  const { getStudentCoGroupReq, isLoading, studentRequests } =
    useAppContext();

  useEffect(() => {
    getStudentCoGroupReq();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (studentRequests.length === 0) {
    return (
      <Wrapper>
        <h2>No Requests to display...</h2>
      </Wrapper>
    );
  }

  return (
    <>
      <div className="jobs">
        {studentRequests.map((request) => {
          return (
            <StudentReqForCoSupervisor key={request._id} {...request} />
          );
        })}
      </div>
    </>
  );
};

export default StudentCoRequestList