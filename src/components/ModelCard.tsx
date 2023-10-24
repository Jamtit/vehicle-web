import { Paper, Typography, Box } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../App";
import logos from "../symbols.json";

interface Model {
  id: number;
  brandName: string | null;
  model: string;
  madeYear: string;
}

export default function ModelCard(props: Model) {
  const { mode } = useContext(DarkModeContext);

  return (
    <Paper
      className="model-card"
      sx={{
        backgroundColor: `${mode ? "background.default" : "primary.main"}`,
      }}
    >
      <Box
        className="model-card_image"
        component="img"
        src={logos[props.brandName?.toLocaleLowerCase() as keyof typeof logos]}
        alt="brand-logo"
      />
      <Box className="model-card_text">
        <Typography>Brand: {props.brandName?.toLocaleUpperCase()}</Typography>
        <Typography>Model: {props.model.toLocaleUpperCase()}</Typography>
        <Typography>Year: {props.madeYear}</Typography>
      </Box>
    </Paper>
  );
}
