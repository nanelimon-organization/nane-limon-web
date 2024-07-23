import { Button, Grid, Typography } from "@mui/material";
import Member from "./Member";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useState } from "react";
import {members} from '../../../../constants/members'
import { useTranslation } from "react-i18next";
function Team() {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0);

  let member1 = members[0 + index];
  let member2 = members[1 + index];
  let member3 = members[2 + index];
  let member4 = members[3 + index];

  function swipeToRight() {
    if (3 + index < members.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function swipeToLeft() {
    if (0 + index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(2);
    }
  }

  return (
    <Grid
      container
      width="100%"
      display="flex"
      bgcolor="#F8F8F8"
      flexDirection="row"
      justifyContent="center"
      paddingY={5}
    >
      <Typography
          textAlign="center"
          component="div"
          sx={{ fontFamily: "roboto-bold", fontSize: 24 }}
        >
          {t("ourTeam.title")}
        </Typography>
      <Grid
        item
        xs={12}
        md={12}
        display={{ md: "flex" }}
        alignItems="center"
        justifyContent="center"
        margin={2}
      >
        <Grid
          item
          xs={12}
          md={2}
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Button
            onClick={swipeToLeft}
            sx={{ marginX: { xs: 0, md: 5 }, color: "#008000" }}
          >
            <KeyboardArrowLeftRoundedIcon
              sx={{ paddingX: { xs: 0, md: 5 }, width: 36, height: 36 }}
            />
          </Button>
        </Grid>
        <Grid item xs={12} md={2} marginX={2} marginY={{ xs: 2, md: 0 }}>
          <Member member={member1} />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          marginX={2}
          marginY={{ xs: 2, md: 0 }}
          display={{ xs: "none", md: "flex" }}
          flexDirection="column"
        >
          <Member member={member2} />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          marginX={2}
          marginY={{ xs: 2, md: 0 }}
          display={{ xs: "none", md: "flex" }}
          flexDirection="column"
        >
          <Member member={member3} />
        </Grid>
        <Grid item xs={12} md={2} marginX={2} marginY={{ xs: 2, md: 0 }}>
          <Member member={member4} />
        </Grid>

        <Grid
          item
          xs={12}
          md={2}
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
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
