import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Divider,
} from "@mui/material";
import ListTwoToneIcon from "@mui/icons-material/ListTwoTone";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LightIcon from "@mui/icons-material/Light";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { DarkModeContext } from "../App";

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

  const { mode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Tooltip title="Menu">
          <IconButton onClick={handleClick}>
            <ListTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Menu open={open} onClose={handleClose} anchorEl={anchorElement}>
          <MenuItem>
            <Link
              style={{ color: `${mode ? "white" : "black"}` }}
              to={"/about"}
            >
              About
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link
              style={{ color: `${mode ? "white" : "black"}` }}
              to={"/models"}
            >
              Models
            </Link>
          </MenuItem>
        </Menu>
        <Button onClick={handleLogoClick}>
          <img
            className="logo-icon"
            src="/4WHEELSKNEELS(LIGHT).png"
            alt="logo"
          />
        </Button>
        <Tooltip title="Toggle mode">
          <IconButton onClick={toggleDarkMode}>
            {mode ? <LightIcon /> : <NightlightRoundIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
