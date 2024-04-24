import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  let { projectId } = useParams();

  return (
    <div>
      <h1>Displaying Project: {projectId}</h1>
    </div>
  );
};
export default ProjectDetail;
