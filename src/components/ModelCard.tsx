import { Paper } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../App";

interface Model {
  brandName: string | null;
  model: string;
  madeYear: string;
}

export default function ModelCard(props: Model) {
  const { mode } = useContext(DarkModeContext);

  return (
    <Paper
      sx={{ mr: 3, p: 3, backgroundColor: `${mode ? "black" : "lightgray"}` }}
    >
      <h1>Brand: {props.brandName}</h1>
      <h2>Model: {props.model}</h2>
      <h2>Year made: {props.madeYear}</h2>
    </Paper>
  );
}
