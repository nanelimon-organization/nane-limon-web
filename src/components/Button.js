import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

function CustomButton({title,onClick,border,borderColor,paddingX,disabled}) {
  return (
    <Button onClick={onClick} component={motion.div} disableRipple disabled={disabled} sx={[useStyle.button,{border: border,borderColor:borderColor,paddingX: paddingX}]} >
      <Typography  textTransform="capitalize"  fontFamily="roboto-medium">{title}</Typography>
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
  