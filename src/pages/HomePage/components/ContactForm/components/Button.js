import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

function CustomButton({
  title,
  onClick,
  border,
  borderColor,
  paddingX,
  disabled,
  fontSize,
  color
}) {
  return (
    <Button
      onClick={onClick}
      component={motion.div}
      disableRipple
      disabled={disabled}
      sx={[
        useStyle.button,
        { border: border, borderColor: borderColor, paddingX: paddingX },
      ]}
    >
      <Typography
        textTransform="capitalize"
        fontSize={fontSize}
        color={color}
        fontFamily="roboto-medium"
      >
        {title}
      </Typography>
    </Button>
  );
}

export default CustomButton;

const useStyle = {
  button: {
    color: "#ffffff",

    "&:hover": {
      boxShadow: "none !important",
    },
    "&:active": {
      boxShadow: "none !important",
      color: "black",
    },
  },
};
