import { useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";

import { projects, validProjects } from "../../constants/projects";
import {
  Box,
  Grid,
} from "@mui/material";
import BreadCrumbs from "../MemberDetail/components/BreadCrumbs";
import ProjectTabs from "../MemberDetail/components/Tabs";



function ProjectDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { projectDetail } = useParams();


  let location = useLocation();

  if (!validProjects.includes(projectDetail)) {
    return <Navigate to="/error" />;
  }

  if (location.state == null && validProjects.includes(projectDetail)) {
    const project = projects.find((project) => project.slug === projectDetail);
    location.state = project;
  }
 
  return (
    <Grid display="flex" margin={3} flexDirection="column" alignItems="center">
      <BreadCrumbs title={location.state.title} />
      <Grid
        container
        display="flex"
        padding={{ xs: 2, md: 5 }}
        justifyContent="center"
        alignItems="start"
      >
        <ProjectTabs location={location} />
        <Grid
          item
          md={6}
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Box
            component="img"
            sx={{
              width: "80%",
              maxHeight: 500,
              borderRadius: 10,
              objectFit: "contain",
            }}
            src={location.state.imageUrl}
            alt="proje"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectDetail;
