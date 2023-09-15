import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import ModelCard from "../components/ModelCard";
import {
  Box,
  Button,
  TextField,
  CircularProgress,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import { useState } from "react";

export default function Models() {
  const [model, setModel] = useState<string | null>(null);
  const [yearMade, setYearMade] = useState<string | null>(null);
  const options = {
    method: "GET",
    url:
      `https://api.api-ninjas.com/v1/cars?limit=15&make=` +
      model +
      `&year=` +
      yearMade,
    headers: {
      "X-API-Key": "KkuGfqkbDq5r8H0QagzZ0A==udbtcLkntIn5tvrV",
    },
    contentType: "application/json",
  };

  const {
    data: brands,
    isLoading,
    refetch,
  } = useQuery(["vehicleBrands"], () =>
    Axios.request(options).then((res) => res.data)
  );

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
        <h3>Loading</h3>
      </Box>
    );
  }

  const handleRefetchingNewBrand = () => {
    refetch();
  };

  return (
    <Container sx={{ width: "100%", mt: 15, pb: 3, pt: 2 }}>
      <Typography variant="h3" sx={{ pb: 1 }}>
        Models
      </Typography>
      <Divider sx={{ marginBlock: 2 }} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Brand"
          variant="outlined"
          onChange={(event) => setModel(event.target.value)}
          sx={{ pr: 2 }}
        />
        <TextField
          label="Year made"
          variant="outlined"
          onChange={(event) => setYearMade(event.target.value)}
          sx={{ pr: 2 }}
        />
        <Button onClick={handleRefetchingNewBrand} variant="outlined">
          Search
        </Button>
      </Box>
      {model && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexFlow: "wrap",
            rowGap: "20px",
            justifyContent: "center",
            mt: "30px",
          }}
        >
          {brands.map(
            (index: {
              model: string;
              year: string;
              brandName: string | null;
            }) => (
              <ModelCard
                model={index.model}
                madeYear={index.year}
                brandName={model}
              />
            )
          )}
        </Box>
      )}
    </Container>
  );
}
