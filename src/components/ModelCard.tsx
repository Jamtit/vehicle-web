import { Paper, Typography, Box } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../App";
import logos from "../symbols.json";

interface Model {
  brandName: string | null;
  model: string;
  madeYear: string;
}

export default function ModelCard(props: Model) {
  const { mode } = useContext(DarkModeContext);

  return (
    <Paper
      sx={{
        mr: 5,
        p: 3,
        backgroundColor: `${mode ? "background.default" : "primary.main"}`,
        width: "300px",
        color: "white",
      }}
    >
      <Box
        component="img"
        src={logos[props.brandName?.toLocaleLowerCase() as keyof typeof logos]}
        alt="brand-logo"
        sx={{ maxWidth: "120px", maxHeight: "120px", mb: 2 }}
      />
      <Typography>Brand: {props.brandName?.toLocaleUpperCase()}</Typography>
      <Typography>Model: {props.model.toLocaleUpperCase()}</Typography>
      <Typography>Year made: {props.madeYear}</Typography>
    </Paper>
  );
}
