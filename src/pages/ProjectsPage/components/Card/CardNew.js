import { Badge, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import firstplace from "../../../../images/1stplace.png";

function CardNew() {
  return (
    <Card
      sx={{
        width: 400,
        borderRadius: 2,
        padding: 2,
        margin: 2,
      }}
      layout
      elevation={1}
      component={motion.div}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        badgeContent={
          <img src={firstplace} alt="badge" style={{ width: 50, height: 50 }} />
        }
      >
        <CardContent>
          <Typography
            textAlign="center"
            component="div"
            sx={{ fontFamily: "roboto-bold",fontSize:20}}
          >
            AUTOMATE
          </Typography>
        </CardContent>
        <Typography
          textAlign="center"
          sx={{ fontFamily: "roboto-regular", wordBreak: "break-word",fontSize:16 }}
        >
          AutoMate projesi, BorusanOto'nun satış sonrası hizmetlerini
          geliştirmek amacıyla çeşitli ileri teknolojiler kullanılarak hayata
          geçirilmiştir.
        </Typography>
        <CardActions sx={{ margin: 1 }}>
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
      </Badge>
    </Card>
  );
}
export default CardNew;