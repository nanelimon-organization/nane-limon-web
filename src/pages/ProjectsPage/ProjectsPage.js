import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardNew from "./components/Card/CardNew";

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography
          textAlign="center"
          component="div"
          sx={{ fontFamily: "roboto-bold", fontSize: 24 }}
        >
          YARIŞMALARDA GELİŞTİRDİĞİMİZ PROJELERİMİZ
        </Typography>
       
        <Grid
          container
          justifyContent="center"
          display="flex"
          alignItems="center"
          margin={2}
          md={10}
        >
          <CardNew />
          <CardNew />

          <CardNew />

          <CardNew />
          <CardNew />
          <CardNew />
        </Grid>
      </Box>
    </>
  );
}

export default ProjectsPage;

// {projects.map((project) => (
//   <Grid item xs={12} md={12} key={project.title} display="flex" justifyContent="center">
//     <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
//     <ProjectCard
//       title={project.title}
//       description={project.description}
//       subtitle={project.subtitle}
//       imageUrl={project.imageUrl}
//       buttonLink={project.buttonLink}
//     />
//     </Box>
//   </Grid>
// ))}
