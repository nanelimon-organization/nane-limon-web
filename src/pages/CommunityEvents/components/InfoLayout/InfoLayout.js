import { Box, Grid, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function InfoLayoutRight({ title, description, src }) {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const xProgress = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

 

  return (
    <>
      <Grid
        container
        overflow="hidden"
  
        component={motion.div}
        ref={ref}
        style={{
          x: xProgress,
          opacity: opacityProgress,
        }}
        display="flex"
        justifyContent="center"
        paddingY={5}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
      >
        <Grid>
          <Box
            sx={{
              borderRadius: 2,
              borderColor: "#F2F2F2",
              height: { xs: 100, md: 150 },
              width: { xs: 200, md: 300 },
              display: {xs: "block",md:"none"}
            }}
            component={motion.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, type: "just", stiffness: 100 }}
            variant="outlined"
            src={src}
          ></Box>
        </Grid>
        <Grid item marginY={5}>
          <Typography
            component={motion.h2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            fontSize={22}
            marginBottom={2}
            fontFamily="roboto-bold"
          >
            {title}
          </Typography>
          <Typography
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            fontSize={15}
            fontFamily="roboto-regular"
            maxWidth={550}
          >
            {description}
          </Typography>
        </Grid>
        <Grid>
          <Box
            sx={{
              borderRadius: 2,
              borderColor: "#F2F2F2",
              height: { xs: 100, md: 150 },
              width: { xs: 200, md: 300 },
              display: {xs: "none",md:"block"}
            }}
            component={motion.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, type: "just", stiffness: 100 }}
            variant="outlined"
            src={src}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}

export function InfoLayoutLeft({ title, description, src }) {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 2", "1.33 1"],
  });
  const xProgress = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <>
      <Grid
        container
        
        component={motion.div}
        ref={ref}
        style={{
          x: xProgress,
          opacity: opacityProgress,
        }}
        display="flex"
        justifyContent="center"
        paddingY={10}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
      >
        <Grid>
          <Box
            sx={{
              borderRadius: 2,
              borderColor: "#F2F2F2",
              height: { xs: 100, md: 150 },
              width: { xs: 200, md: 300 },
              
            }}
            variant="outlined"
            component={motion.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            src={src}
          ></Box>
        </Grid>
        <Grid item marginY={5} marginLeft={5}>
          <Typography
            component={motion.h3}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            fontSize={20}
            marginBottom={2}
            fontFamily="roboto-bold"
          >
            {title}
          </Typography>
          <Typography
            fontSize={15}
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            fontFamily="roboto-regular"
            maxWidth={550}
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
