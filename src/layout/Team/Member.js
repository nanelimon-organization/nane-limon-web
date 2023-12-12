import { Avatar, Box, Card, Typography } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Member({ name, title, src }) {
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
      <Avatar src={src} sx={{ width: 100, height: 100 }}></Avatar>

      <Typography
        variant="h6"
        sx={{
          fontSize: 20,
          fontWeight: "700",
          textAlign: "center",
          fontFamily: "opensans-semibold",
        }}
      >
        {name}
      </Typography>

      <Typography textAlign="justify" fontFamily="opensans-regular">
        {title}
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
