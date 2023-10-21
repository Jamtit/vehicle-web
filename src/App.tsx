import "./App.css";
import { Root } from "./routes/Root";
import About from "./routes/About";
import Models from "./routes/Models";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Paper,
  Container,
} from "@mui/material";
import { createContext, useState } from "react";

interface DarkThemeContext {
  mode: boolean;
  toggleDarkMode?: () => void;
}

export const DarkModeContext = createContext<DarkThemeContext>({ mode: false });
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "models",
          element: <Models />,
        },
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#8a281c",
        light: "#874139",
        dark: "#661e15",
      },
      divider: "#8a281c",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#a30000",
        light: "#962424",
        dark: "#7a0101",
      },
      background: {
        default: "#212020",
      },
      divider: "#a30000",
    },
  });

  return (
    <Container sx={{ width: "100vw" }}>
      <DarkModeContext.Provider
        value={{ mode: darkMode, toggleDarkMode: toggleMode }}
      >
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <QueryClientProvider client={client}>
            <Paper
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                background: "none",
              }}
            >
              <RouterProvider router={router} />
            </Paper>
          </QueryClientProvider>
        </ThemeProvider>
      </DarkModeContext.Provider>
    </Container>
  );
}

export default App;
