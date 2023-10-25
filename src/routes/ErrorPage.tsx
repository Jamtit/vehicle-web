import { Paper, Typography, Divider, Button } from "@mui/material";
import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  let error: any = useRouteError();
  const navigate = useNavigate();
  return (
    <Paper className="error">
      <Typography className="error_reaction" variant="h3">
        Oops!
      </Typography>
      <Divider className="error_divider" />
      <Typography className="error_message">
        <span className="error_message-information">Error occured:</span>{" "}
        {error.data.slice(7)}
      </Typography>
      <Typography className="error_status">
        <span className="error_message-information">Error status:</span>{" "}
        {error.statusText}
      </Typography>
      <Divider className="error_divider" />
      <Button
        className="error_button"
        variant="outlined"
        onClick={() => navigate("/")}
      >
        Back To Home
      </Button>
    </Paper>
  );
}
