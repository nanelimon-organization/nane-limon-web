import { Card } from "@mui/material";

function DetailCardContainer({ children }) {
  return (
    <Card
      sx={{
        display: "flex",
        width: "60%",
        flexDirection: { xs: "column", md: "row" },
        padding: 5,
        margin: 5,
        borderRadius: 10
    }}
      elevation={0}
      
    >
      {children}
    </Card>
  );
}

export default DetailCardContainer;
