import { Button, Grid } from "@mui/material";
import Member from "./Member";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useState } from "react";
function Team() {
  const list = [
    {
      name: "Murat Köklü",
      slug: "murat-koklu",
      title: "title"
    },
    {
      name: "Şeyma Sarıgil",
      slug: "seyma-sarigil",
      title: "title"
    },
    {
      name: "Erdinç Dal",
      slug: "erdinc-dal",
      title: "title"
    },
    {
      name: "Tarık Kaan Koç",
      slug: "tarik-kaan-koc",
        title: "title"
    },
    {
      name: "Elif Sarıgil",
      slug: "elif-sarigil",
      title: "title"
    },
    {
      name: "Eray Büyükkanat",
      slug: "eray-buyukkanat",
      title: "title"
    },
  ];
  const [index, setIndex] = useState(0);
  
  const member1 = list[0+index];
  const member2 = list[1+index];
  const member3 = list[2+index];
  const member4 = list[3+index];


  function swipeToRight() {
    if (3+index < list.length-1) {
      setIndex(index +1);
    }else{
      setIndex(0)
    }
  }
  function swipeToLeft() {
    if (0+index > 0) {
      setIndex(index- 1);
    }else{
      setIndex(2)
    }
  }

  return (
    <Grid
      container
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      paddingY={5}
    >
      <Grid
        item
        xs={12}
        md={12}
        display={{ md: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={2} display="flex" flexDirection="row" justifyContent="center" >
          <Button
            onClick={swipeToLeft}
            sx={{ marginX: { xs: 0, md: 5 }, color: "#008000" }}
          >
            <KeyboardArrowLeftRoundedIcon
              sx={{ paddingX: { xs: 0, md: 5 }, width: 36, height: 36 }}
            />
          </Button>
        </Grid>
        <Grid item xs={12} md={2} marginX={2} marginY={{xs: 2,md: 0}}>
          <Member member={member1} />
        </Grid>
        <Grid item xs={12} md={2} marginX={2} marginY={{xs: 2,md: 0}} display={{xs: "none",md: "flex"}}  flexDirection="column">
          <Member member={member2} />
        </Grid>
        <Grid item xs={12} md={2} marginX={2} marginY={{xs: 2,md: 0}} display={{xs: "none",md: "flex"}} flexDirection="column">
          <Member member={member3}  />
        </Grid>
        <Grid item xs={12} md={2} marginX={2} marginY={{xs: 2,md: 0}}  >
          <Member member={member4}  />
        </Grid>

        <Grid item xs={12} md={2} display="flex" flexDirection="row" justifyContent="center">
          <Button
            onClick={swipeToRight}
            sx={{ marginX: { xs: 0, md: 5 }, color: "#008000" }}
          >
            <KeyboardArrowRightRoundedIcon
              sx={{ paddingX: { xs: 0, md: 5 }, width: 36, height: 36 }}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Team;
