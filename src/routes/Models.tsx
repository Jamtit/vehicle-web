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
  const [newModel, setNewModel] = useState<string | null>(null);

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
  } = useQuery(["vehicleBrands", model], () =>
    Axios.request(options).then((res) => res.data)
  );

  const handleSearch = () => {
    setModel(newModel);
    refetch();
  };

  return (
    <Container sx={{ width: "100%", mt: 15, pb: 3, pt: 2 }}>
      <Typography variant="h3" sx={{ pb: 1 }}>
        Models
      </Typography>
      <Divider sx={{ marginBlock: 3 }} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Brand"
          variant="outlined"
          onChange={(event) => {
            setNewModel(event.target.value);
          }}
          sx={{ pr: 2 }}
        />
        <TextField
          label="Year made"
          variant="outlined"
          onChange={(event) => setYearMade(event.target.value)}
          sx={{ pr: 2 }}
        />
        <Button onClick={handleSearch} variant="outlined">
          Search
        </Button>
      </Box>
      {brands === undefined || (brands.length === 0 && model !== null) ? (
        isLoading ? (
          <CircularProgress sx={{ marginTop: "30px" }} />
        ) : (
          <Typography sx={{ marginTop: "20px" }}>
            The vehicle brand of your choice is either incorrect or no data has
            been found.
          </Typography>
        )
      ) : isLoading ? (
        <CircularProgress sx={{ marginTop: "30px" }} />
      ) : (
        model && (
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
              (
                value: {
                  id: string;
                  model: string;
                  year: string;
                  brandName: string;
                },
                key: number
              ) => (
                <ModelCard
                  id={key}
                  model={value.model}
                  madeYear={value.year}
                  brandName={model}
                />
              )
            )}
          </Box>
        )
      )}
    </Container>
  );
}
