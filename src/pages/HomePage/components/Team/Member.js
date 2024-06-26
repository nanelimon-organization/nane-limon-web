import { Avatar, Box, Card, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import animation from '../../../../animations/animation.gif'
function Member({ member }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const yProgress = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <NavLink
      state={member}
      style={{ textDecoration: "none", color: "black" }}
      to={"member/" + member.slug}
    >
      <Card
        component={motion.div}

        ref={ref}
        style={{
          y: yProgress,
          opacity: opacityProgress,
        }}
        sx={{
          alignItems: "center",
          borderRadius: 5,
          paddingBottom: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          justifyContent="center"
          display="flex"
          sx={{
            backgroundImage: `url(${animation})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
          width="100%"
        height={60}
          marginBottom={6}
          padding={2}
        >
          <Avatar src={member.src} sx={{ width: 100, height: 100 }}></Avatar>
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            textAlign: "center",
            fontFamily: "roboto-bold",
          }}
        >
          {member.name}
        </Typography>
        <Typography
          textAlign="justify"
          fontSize={14}
          fontFamily="roboto-regular"
        >
          {member.title}
        </Typography>
      </Card>
    </NavLink>
  );
}

export default Member;
