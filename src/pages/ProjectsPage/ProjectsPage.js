import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import ProjectCard from "./components/Card/Card";
import { projects } from "../../constants/projects";

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid
       container
       justifyContent="center"
      >
        
          {projects.map((project) => (
            <Grid item xs={12} md={12} key={project.title} display="flex" justifyContent="center">
              <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
              <ProjectCard
                title={project.title}
                description={project.description}
                subtitle={project.subtitle}
                imageUrl={project.imageUrl}
                buttonLink={project.buttonLink}
              />
              </Box>
            </Grid>
          ))}
      </Grid>
      </Box>
    </>
  );
}

export default ProjectsPage;
