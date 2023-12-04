import { Avatar, Box, Typography } from "@mui/material";

function Member() {
  return (
    <Box
      sx={{
        marginX:5,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Avatar sx={{ width: 128, height: 128 }}></Avatar>

      <Typography
        variant="h6"
        sx={{
          fontSize: 24,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Muhteşem Biri
      </Typography>

      <Typography textAlign="justify">
        Creative professionals who specialize in visual art may find it
        challenging to balance the writing of their bio and displaying of their
        portfolio. Not Lisa Quine. Lisa has an exceptional balance of her
        professional bio and creative work.
      </Typography>
    </Box>
  );
}

export default Member;
