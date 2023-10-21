import { Typography, AppBar } from "@mui/material";

export default function Footer() {
  return (
    <AppBar
      sx={{
        top: "auto",
        bottom: 0,
        height: "50px",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Typography>
        <span>&#169;</span> Wheels 4 Kneels
      </Typography>
    </AppBar>
  );
}
