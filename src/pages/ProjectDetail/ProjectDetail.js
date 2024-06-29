import { useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useLoading } from "../../contexts/LoadingContext";
import { projects, validProjects } from "../../constants/projects";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import BreadCrumbs from "../MemberDetail/components/BreadCrumbs";

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

  return (
    <Grid display="flex" margin={5} flexDirection="column" alignItems="center">
      <BreadCrumbs title={location.state.title} />
      <Grid
        container
        display="flex"
        padding={5}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item display="flex" flexDirection="column" md={6}>
          <Typography fontFamily="roboto-medium" fontSize={32}>
            {location.state.title}
          </Typography>
          <Divider sx={{ marginY: 3, bgcolor:"#111111"}} />
          <Box
            component="div"
            dangerouslySetInnerHTML={{ __html: location.state.description }}
            style={{ fontFamily: "roboto-regular", fontSize: "16px" }}
          />
        </Grid>
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
              maxHeight: 800,
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
