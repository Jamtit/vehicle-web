import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import ListTwoToneIcon from "@mui/icons-material/ListTwoTone";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const open = Boolean(anchorElement);
  const handleClose = () => {
    setAnchorElement(null);
  };

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "start" }}>
        <IconButton onClick={handleClick}>
          <ListTwoToneIcon />
        </IconButton>
        <Menu open={open} onClose={handleClose} anchorEl={anchorElement}>
          <MenuItem>
            <Link to={"/about"}>About</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/models"}>Models</Link>
          </MenuItem>
        </Menu>
        <Button
          onClick={handleLogoClick}
          sx={{ position: "relative", left: "765px" }}
        >
          <img
            className="logo-icon"
            src="../../public/4WHEELSKNEELS(LIGHT).png"
            alt="logo"
          />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
