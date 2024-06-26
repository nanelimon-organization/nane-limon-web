import { useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useLoading } from "../../contexts/LoadingContext";
import { projects, validProjects } from "../../constants/projects";

function ProjectDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { projectDetail } = useParams();
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    hideLoading();
  }, []);

  let location = useLocation();

  if (!validProjects.includes(projectDetail)) {
    return <Navigate to="/error" />;
  }

  if (location.state == null && validProjects.includes(projectDetail)) {
    const project = projects.find((project) => project.slug === projectDetail);
    location.state = project;
  }

  return <div>{location.state.title}</div>;
}

export default ProjectDetail;
