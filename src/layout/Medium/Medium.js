import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Box, Card, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

function Medium({posts}) {
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ margin: 8, padding: 5, boxShadow: 20,borderRadius:10 }} >
        <Box component="a"  target="_blank" href="https://medium.com/nane-limon">
        <Box
          component="img"
          width={{xs: 36,md:256}}
        
          paddingLeft={4}
          sx={{ objectFit: "contain" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/2560px-Medium_%28website%29_logo.svg.png"
        /></Box>

        <List>
          {posts.map((post) => {
            return (
              <ListItem>
                <ListItemButton
                  target="_blank"
                  href={post.link}
                  rel="noopener noreferrer"
                >
                  <ListItemIcon>
                    <KeyboardArrowRightRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary={post.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem>
          <ListItemButton
                  target="_blank"
                  href="https://medium.com/nane-limon"
                  rel="noopener noreferrer"
                >
                  <ListItemIcon>
                    <KeyboardArrowRightRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Diğer Paylaşımları Oku" />
                </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </Grid>
  );
}

export default Medium;
