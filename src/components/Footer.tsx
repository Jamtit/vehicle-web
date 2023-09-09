import { BottomNavigation, Typography } from "@mui/material";

export default function Footer() {
  return (
    <BottomNavigation>
      <Typography sx={{ color: "black" }}>
        <span>&#169;</span> Wheels 4 Kneels
      </Typography>
    </BottomNavigation>
  );
}
