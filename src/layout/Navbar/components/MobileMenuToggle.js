import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function MobileMenuToggle({toggleMenu}) {
  return (
    <Button
      onClick={toggleMenu}
      sx={{
        width: 50,
        height: 50,
        display: { xs: "flex", md: "none" },
        color: "green",
      }}
    >
      <MenuIcon />
    </Button>
  );
}

export default MobileMenuToggle;
