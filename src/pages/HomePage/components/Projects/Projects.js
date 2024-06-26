import { Box, Button, Grid, Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { projects } from "../../../../constants/projects";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
function Projects({ refs, scrollToSection }) {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
    if (showAllProjects) {
      scrollToSection("projects");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#ffffff"
      ref={refs.projectsRef}
      flexDirection="column"
      paddingY={5}
    >
      <Typography
        textAlign="center"
        component="div"
        sx={{ fontFamily: "roboto-bold", fontSize: 24 }}
      >
        PROJELERİMİZ
      </Typography>

      <Grid
        container
        justifyContent="center"
        display="flex"
        alignItems="center"
        md={10}
        sx={{
          maxHeight: showAllProjects ? "none" : { xs: 750, md: 800 },
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out",
        }}
      >
        {projects
          .slice(0, showAllProjects ? projects.length : 4)
          .map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              title={project.title}
              shortDescription={project.shortDescription}
              status={project.status}
              slug={project.slug}
            />
          ))}
      </Grid>

      <Button
        onClick={toggleProjects}
        variant="text"
        disableElevation
        disableRipple
        disableTouchRipple
        disableFocusRipple
        color="primary"
        sx={{ mt: 3 }}
      >
        {showAllProjects ? (
          <ExpandLessIcon sx={{ color: "#111111", width: 40, height: 40 }} />
        ) : (
          <ExpandMoreIcon sx={{ color: "#111111", width: 40, height: 40 }} />
        )}
      </Button>
    </Box>
  );
}

export default Projects;
