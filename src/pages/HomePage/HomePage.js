import { Alert, Box, Divider, Grid, Snackbar } from "@mui/material";

import Banner from "../../layout/Banner/Banner";
import axios from "axios";
import Medium from "../../layout/Medium/Medium";
import Summary from "../../layout/Summary/Summary";
import { useLoaderData } from "react-router-dom";
import Team from "../../layout/Team/Team";
import ContactForm from "../../layout/ContactForm/ContactForm";
import { useEffect, useState } from "react";

function HomePage() {
  const posts = useLoaderData();
  useEffect(() => {
    window.scrollTo({top: 0,behavior: "smooth"})
  }, [])

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%', margin: 2}}
        >
          Mesajın başarıyla iletildi!
        </Alert>
      </Snackbar>
      <Banner />
      <Box sx={{ paddingX: { xs: 0, md: 20 } }}>
        {/* medium ve özet kısmı */}

        <Grid container>
          {/* <Medium posts={posts} /> */}
          <Summary />
        </Grid>
        {/* medium ve özet kısmı */}
      </Box>
      <Divider />
      <Team />
      <Divider />
      <Box sx={{ paddingX: { xs: 0, md: 20 } }}>
        <ContactForm handleClick={handleClick} />
      </Box>
    </>
  );
}

export default HomePage;

// export const homeLoader = async ({ request, params }) => {
//   try {
//     const response = await axios.get(
//       "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/nane-limon"
//     );
//     for(let i = 0;i<response.data.items.length;i++){
//       response.data.items[i].title = response.data.items[i].title.replace("&amp;","&")
//     }
//     return await response.data.items.slice(0, 5);
//   } catch {
//     console.log("hata");
//   }
// };
