import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
  } from "@mui/material";
  import { motion } from "framer-motion";
  import { NavLink } from "react-router-dom";
  import ChevronRightIcon from "@mui/icons-material/ChevronRight";
  
  import imagePaths from "../../../../assets/imagePaths";
  
  function ProjectCard({ title, shortDescription, status }) {
    const statusImageMapping = {
      firstPlace: imagePaths.icons.firstPlace,
      secondPlace: imagePaths.icons.secondPlace,
      thirdPlace: imagePaths.icons.thirdPlace,
    };
  
 
    const badgeImage = status ? statusImageMapping[status] : null;
  
    return (
      <Card
        sx={{
          width: {xs: 400,md: 500},
          height: {xs:300,md: 250},
          borderRadius: 2,
          padding: 3,
          margin: 2,
          position: 'relative', 
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between"
        }}
        layout
        elevation={1}
        component={motion.div}
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        {badgeImage && (
          <img
            src={badgeImage}
            alt="badge"
            style={{
              width: 50,
              height: 50,
              position: 'absolute', 
              top: 5,
              right: 5,
            }}
          />
        )}
        <CardContent>
          <Typography
            textAlign="center"
            component="div"
            sx={{ fontFamily: "roboto-bold", fontSize: {xs: 15,md:18} }}
          >
            {title}
          </Typography>
        </CardContent>
        <Typography
          textAlign="justify"
          sx={{
            fontFamily: "roboto-regular",
            wordBreak: "break-word",
            fontSize: {xs: 15,md:15},
            marginX: 2, 
          }}
        >
          {shortDescription}
        </Typography>
        <CardActions sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
          <NavLink to="" target="_blank">
            <Button
              disableTouchRipple
              sx={{
                width: 150,
                backgroundColor: "#ffffff",
                "&:hover": {
                  backgroundColor: "#ffffff",
                },
              }}
              size="small"
              variant="text"
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: 16,
                  fontFamily: "roboto-bold",
                  color: "#008000",
                  textTransform: "capitalize",
                }}
              >
                Projeyi İncele
              </Typography>
              <ChevronRightIcon sx={{ color: "#008000" }} />
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    );
  }
  
  export default ProjectCard;
  