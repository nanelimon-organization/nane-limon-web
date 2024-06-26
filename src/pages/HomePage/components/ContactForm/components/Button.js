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
  color,
}) {
  return (
    <Button
      onClick={onClick}
      component={motion.div}
      disableRipple
      disableElevation
      disableFocusRipple
      disableTouchRipple
      disabled={disabled}
      sx={{
        color: color ? color : "#ffffff",
        "&:hover": { boxShadow: "none !important", bgcolor: "transparent" },
        "&:active": {
          boxShadow: "none !important",
          color: "#ffffff",
        },
        border: border,
        borderColor: borderColor,
        paddingX: paddingX,
      }}
    >
      <Typography
        textTransform="capitalize"
        fontSize={fontSize}
        fontFamily="roboto-medium"
      >
        {title}
      </Typography>
    </Button>
  );
}

export default CustomButton;

