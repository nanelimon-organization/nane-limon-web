import { Box, Button, Grid, Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { projects } from "../../../../constants/projects";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
function Projects({ refs, scrollToSection }) {
 const { t } = useTranslation()
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
      bgcolor="#F8F8F8"
      ref={refs.projectsRef}
      flexDirection="column"
      paddingY={5}
    >
      <Typography
        textAlign="center"
        component="div"
        sx={{ fontFamily: "roboto-bold", fontSize: 24 }}
      >
        {t("projects.title")}
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
              status={project.status}
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
