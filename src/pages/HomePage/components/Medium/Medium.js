import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import {
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function Medium({ posts }) {
const { t }= useTranslation()
   function decodeHtmlEntities(text) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
  
  return (
    <Grid item xs={12} md={6}>

      <Card sx={{ margin: {xs: 3,md: 8}, padding: {xs: 2,md: 5}, boxShadow: 20, borderRadius: 10, alignItems:"center", display:"flex",flexDirection:"column" }}>
        <Box component="a" target="_blank" href="https://medium.com/nane-limon">
          <Box
            component="img"
            width={{ xs: 128, md: 256 }}
            sx={{ objectFit: "contain" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/2560px-Medium_%28website%29_logo.svg.png"
          />
        </Box>
        <List>
          <Typography variant="h5" textAlign="center" fontFamily="roboto-mediumitalic" sx={{fontSize:{xs: 15,md:22}}}>{t("medium.lastArticles")}</Typography>
          <Divider sx={{marginY: 1, borderWidth:1,borderColor: "green"}}/>
          {posts.map((post) => {
            return (
              <ListItem sx={{ paddingX: 0 }}>
                <ListItemButton
                  target="_blank"
                  href={post.link}
                  rel="noopener noreferrer"
                >
                  <ListItemIcon>
                    <KeyboardArrowRightRoundedIcon />
                  </ListItemIcon>
                  <ListItemText  primary={<Typography fontFamily="roboto-medium">{decodeHtmlEntities(post.title)}</Typography>} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem sx={{ paddingX: 0 }}>
            <ListItemButton
              target="_blank"
              href="https://medium.com/nane-limon"
              rel="noopener noreferrer"
            >
              <ListItemIcon>
                <KeyboardArrowRightRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={t("medium.readMore")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </Grid>
  );
}

export default Medium;
