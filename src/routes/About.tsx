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
    <Paper className="about">
      <Accordion className="about_accordion">
        <AccordionSummary className="about_accordion_summary">
          <DirectionsCarFilledRoundedIcon className="about_accordion_summary--icon" />
          <Typography className="about_accordion_summary--name">
            About Me
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="about_accordion_details">
          <Divider className="about_accordion_details--divider" />
          <Typography className="about_accordion_details--information">
            Hi, there!
            <br />A brand new website, called Wheels 4 Kneels, allows you to
            choose a model of your liking and receive "just enough" information
            about your selection.
            <br />
            Created by vehicle enthusiast and given to vehicle enthusiasts.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}
