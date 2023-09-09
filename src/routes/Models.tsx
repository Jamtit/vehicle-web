import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import ModelCard from "../components/ModelCard";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Models() {
  const [model, setModel] = useState<string | null>("toyota");
  const options = {
    method: "GET",
    url: `https://api.api-ninjas.com/v1/cars?limit=10&make=` + model,
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
    return <h1>Loading...</h1>;
  }

  const handleRefetchingNewBrand = () => {
    refetch();
  };

  return (
    <>
      <h1>Models</h1>
      <TextField
        label="Brand"
        variant="outlined"
        onChange={(event) => setModel(event.target.value)}
      />
      <Button onClick={handleRefetchingNewBrand}>Search</Button>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
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
    </>
  );
}
