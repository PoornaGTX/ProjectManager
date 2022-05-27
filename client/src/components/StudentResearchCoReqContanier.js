import React from "react";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import StudentResearchCoReq from "./StudentResearchCoReq";
import Wrapper from "../assets/wrappers/JobsContainer";

const StudentResearchCoReqContanier = () => {
  const { getRequestCoSupervisor, requestCoGroups, isLoading } =
    useAppContext();

  useEffect(() => {
    getRequestCoSupervisor();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (requestCoGroups.length === 0) {
    return (
      <Wrapper>
        <h2>No Requestes to display...</h2>
      </Wrapper>
    );
  }

  return (
    <>
      <div className="jobs">
        {requestCoGroups.map((requestCoGroup) => {
          return (
            <StudentResearchCoReq
              key={requestCoGroup._id}
              {...requestCoGroup}
            />
          );
        })}
      </div>
    </>
  );
};

export default StudentResearchCoReqContanier;
