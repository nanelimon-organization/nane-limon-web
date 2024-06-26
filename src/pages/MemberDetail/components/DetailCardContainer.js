import { Card } from "@mui/material";
import { motion } from "framer-motion";

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
      elevation={2}
      component={motion.div}
      initial={{  opacity: 0.5}}
      animate={{opacity: 1}}
      exit={{  opacity: 0.5}}
      transition={{ duration: 0.5, ease: "easeInOut" }} 
    >
      {children}
    </Card>
  );
}

export default DetailCardContainer;
