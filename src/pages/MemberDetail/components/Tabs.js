import { Box, Grid, styled, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#111111",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0)",
    "&.Mui-selected": {
      color: "#111111",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function ProjectTabs({ location }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item display="flex" flexDirection="column" xs={12} md={6}>
      <StyledTabs
        variant="scrollable"
        scrollButtons
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="Proje" />
        <StyledTab label="Sağlanan Katma Değer" />
        <StyledTab label="Çözüm Yaklaşımı" />
        <StyledTab label="Değer Önerisi" />
        <StyledTab label="Proje Sayfası" />
      </StyledTabs>
      <CustomTabPanel value={value} index={0}>
        <Typography fontFamily="roboto-regular" fontSize={{ xs: 12, md: 16 }}>
          {location.state.description}
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box
          component="div"
          dangerouslySetInnerHTML={{ __html: location.state.katmaDeger }}
          style={{ fontFamily: "roboto-regular", fontSize: "16px" }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Box
          component="div"
          dangerouslySetInnerHTML={{ __html: location.state.cozumYaklasimi }}
          style={{ fontFamily: "roboto-regular", fontSize: "16px" }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Box
          component="div"
          dangerouslySetInnerHTML={{ __html: location.state.degerOnerisi }}
          style={{ fontFamily: "roboto-regular", fontSize: "16px" }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        eklenecek...
      </CustomTabPanel>
    </Grid>
  );
}

export default ProjectTabs;
