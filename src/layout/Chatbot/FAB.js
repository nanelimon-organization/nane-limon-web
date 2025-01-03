import Fab from "@mui/material/Fab";
import ChatIcon from "@mui/icons-material/Chat";
import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";

function FloatingActionButton({ style, onClick }) {
  const src = "https://avatars.githubusercontent.com/u/109470900?s=200&v=4";

  return (
    <Fab
      color="default"
      sx={{
        ...style,
        bgcolor: "#ffffff",
        width: 60,
        height:60,
        "&:hover":{
          bgcolor: "#ffffff"
        }
      }}
      
      disableRipplee
      disableFocusRipple
      disableTouchRipple
      onClick={onClick}
      component={motion.div}
            whileHover={{ scale: 1.18 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
    >
        <ChatIcon sx={{color:"black"}} />
    </Fab>
  );
}

export default FloatingActionButton;
