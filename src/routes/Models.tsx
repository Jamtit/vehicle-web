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
    <Container className="models">
      <Typography className="models_name" variant="h3">
        Models
      </Typography>
      <Divider className="models_divider" />
      <Box className="models_inputs">
        <TextField
          className="models_inputs--field"
          label="Brand"
          variant="outlined"
          onChange={(event) => {
            setNewModel(event.target.value);
          }}
        />
        <TextField
          className="models_inputs--field"
          label="Year made"
          variant="outlined"
          onChange={(event) => setYearMade(event.target.value)}
        />
        <Button
          className="models_inputs--button"
          onClick={handleSearch}
          variant="outlined"
        >
          Search
        </Button>
      </Box>
      {brands === undefined || (brands.length === 0 && model !== null) ? (
        isLoading ? (
          <CircularProgress className="models_progress" />
        ) : (
          <Typography className="models_wrong-brand">
            The vehicle brand of your choice is either incorrect or no data has
            been found.
          </Typography>
        )
      ) : isLoading ? (
        <CircularProgress className="models_progress" />
      ) : (
        model && (
          <Box className="models_vehicle-cards">
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
