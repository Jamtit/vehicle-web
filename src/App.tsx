import "./App.css";
import { Root } from "./routes/Root";
import About from "./routes/About";
import Models from "./routes/Models";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
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
  return (
    <>
      <QueryClientProvider client={client}>
        <div>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
