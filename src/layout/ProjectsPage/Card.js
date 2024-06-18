import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function ProjectCard({imageUrl,subtitle,title,description,buttonLink}) {
    const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shouldShowReadMore = description.length > 1300;

  return (
    <Card
      sx={{
        maxWidth: 1200,
        borderRadius: 2,
        margin: {xs: "3%",md: 3}
      }}
      elevation={2}
      component={motion.div}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
    >
      <CardMedia
        component="img"
        sx={{ borderRadius: 3, width: "100%", objectFit:"contain",height: {xs: 200,md:500} }}
        alt="green iguana"
        image={imageUrl}
      />
      <CardContent sx={{ margin: 1 }}>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{ fontFamily: "roboto-mediumitalic", fontSize: 14 }}
        >
          {subtitle}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontFamily: "roboto-bold" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="justify"
          sx={{ fontFamily: "roboto-medium",whiteSpace: "pre-line"}}
          dangerouslySetInnerHTML={{
            __html: showFullDescription ? description : description.slice(0, shouldShowReadMore ? 800 : description.length),
          }}
          component="div"
        />
        {shouldShowReadMore && !showFullDescription && (
          <Button disableRipple disableTouchRipple sx={{color: "#008000"}} onClick={toggleDescription} >
            Devamını Oku
          </Button>
        )}
      </CardContent>
      <CardActions sx={{ margin: 1 }}>
        <NavLink
          to={buttonLink}
          target="_blank"
        >
          <Button
            disableTouchRipple
            sx={{
              width: 150,
              backgroundColor: "#008000",
              "&:hover": {
                backgroundColor: "#008000",
              },
            }}
            size="small"
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: 14,
                fontFamily: "roboto-regular",
                color: "#ffffff",
                textTransform: "capitalize",
              }}
            >
              Projeyi İncele
            </Typography>
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
