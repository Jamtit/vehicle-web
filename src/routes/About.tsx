import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";

export default function About() {
  return (
    <Paper>
      <Accordion
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AccordionSummary>
          <DirectionsCarFilledRoundedIcon sx={{ marginRight: "10px" }} />
          <Typography>About Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          <Typography sx={{ marginBlock: "20px" }}>Hi There!</Typography>
          <Typography>
            A brand new website, called Wheels 4 Kneels, allows you to choose a
            model of your liking and receive "just enough" information about
            your selection.
          </Typography>
          <Typography>
            Created by vehicle enthusiast and given to vehicle enthusiasts.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}
