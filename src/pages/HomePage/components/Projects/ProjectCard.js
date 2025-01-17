"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import imagePaths from "../../../../assets/imagePaths";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function ProjectCard({ project }) {
 const { t } = useTranslation()
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const statusImageMapping = {
    firstPlace: imagePaths.icons.firstPlace,
    secondPlace: imagePaths.icons.secondPlace,
    thirdPlace: imagePaths.icons.thirdPlace,
    academic: imagePaths.icons.academic,
    finalist: imagePaths.icons.finalist,
  };

  const badgeImage = project.status ? statusImageMapping[project.status] : null;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <Card
        sx={{
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 250 },
          borderRadius: 2,
          padding: {xs: 4,md:4},
          margin: 2,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        layout
        elevation={0}
        component={motion.div}
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        {badgeImage && (
          <img
            src={badgeImage}
            alt="badge"
            style={{
              width: 50,
              height: 50,
              position: "absolute",
              top: 5,
              right: 5,
            }}
          />
        )}
        <CardContent>
          <Typography
            textAlign="start"
            component="div"
            sx={{ fontFamily: "roboto-bold", fontSize: { xs: 15, md: 18 } }}
          >
            {t(`projects.${project.slug}.title`)}
          </Typography>
        </CardContent>
        <Typography
          textAlign="start"
          sx={{
            fontFamily: "roboto-regular",
            wordBreak: "break-word",
            fontSize: { xs: 15, md: 15 },
            marginX: 2,
          }}
        >
            {t(`projects.${project.slug}.shortDescription`)}
            </Typography>
        <CardActions sx={{ display: "flex", justifyContent: "start" }}>
          <NavLink
            state={project}
            to={"projects/" + project.slug}
            style={{ textDecoration: "none" }}
          >
            <Button
              disableTouchRipple
              sx={{
                width: 150,
                backgroundColor: "#ffffff",
                "&:hover": {
                  backgroundColor: "#ffffff",
                },
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
              }}
              size="small"
              variant="text"
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "roboto-bold",
                  color: "#008000",
                  textTransform: "capitalize",
                  textAlign: "start",
                }}
              >
                {t("projects.buttonText")}
              </Typography>
              <ChevronRightIcon sx={{ color: "#008000" }} />
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
