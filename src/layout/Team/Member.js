import { Avatar, Box, Card, Typography } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Member({member }) {
  return (
    <Card
      sx={{
        padding: 4,
        alignItems: "center",
        borderRadius:5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Avatar src={member.src} sx={{ width: 100, height: 100 }}></Avatar>

      <NavLink state={member} style={{textDecoration: "none", color: "black"}} to={member.slug}>
      <Typography
        variant="h6"
        sx={{
          fontSize: 20,
          fontWeight: "700",
          textAlign: "center",
          fontFamily: "opensans-semibold",
        }}
      >
        {member.name}
      </Typography>
      </NavLink>
      <Typography textAlign="justify" fontFamily="opensans-regular">
        {member.title}
      </Typography>

      <Box display="flex" marginY={1}>
        <FaGithub />
        <Box paddingX={1}>
        <FaLinkedin />
        </Box>
        <IoIosMail />

      </Box>
    </Card>
  );
}

export default Member;
