import { Box, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";

function CustomButton({title,onClick}) {
  return (
    <Button onClick={onClick} component={motion.div} disableRipple sx={useStyle.button} >
      {title}
    </Button>
  );
}

export default CustomButton;

const useStyle = {
    button: {
      color: "#008000",
      "&:hover": {
        boxShadow: "none !important",
        backgroundColor: "white",
      },
      "&:active": {
        boxShadow: "none !important",
        backgroundColor: "white",
        color: "black"
      },
    
    
    },
   
    
  };
  