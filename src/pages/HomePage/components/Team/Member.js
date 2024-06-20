import { Avatar, Box, Card, Typography } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Member({member }) {
  return (
    <NavLink state={member} style={{textDecoration: "none", color: "black"}} to={"member/"+member.slug}>
    <Card
      sx={{
        alignItems: "center",
        borderRadius:5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box  justifyContent="center" display="flex"  bgcolor="#888888" width="100%" height={40} marginBottom={6} padding={2}>
      
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
      <Typography textAlign="justify" fontFamily="roboto-regular">
        {member.title}
      </Typography>

      <Box display="flex" marginY={1}>
        <FaGithub size={22} />
        <Box paddingX={1}>
        <FaLinkedin size={22}/>
        </Box>
        <IoIosMail size={22} />

      </Box>
     
    </Card>
    </NavLink>

  );
}

export default Member;
