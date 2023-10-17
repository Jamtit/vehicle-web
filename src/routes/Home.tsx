import { Box, Paper } from "@mui/material";
import { data } from "../carousel.json";
import { useState } from "react";

export default function Home() {
  const [slide, setSlide] = useState<number>(0);

  const nextSlide = () => {
    slide < data.length - 1 ? setSlide(slide + 1) : setSlide(0);
  };

  setInterval(nextSlide, 12000);
  return (
    <Paper
      sx={{
        background: "none",
        boxShadow: "none",
        overflow: "hidden",
        width: "1400px",
        position: "relative",
        right: "150px",
      }}
    >
      {data.map((data, index) => (
        <Box
          component="img"
          src={data.imageURL}
          alt={index + " image"}
          key={index}
          className={slide === index ? "slide" : "slide-next"}
        />
      ))}
    </Paper>
  );
}
