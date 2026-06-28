import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import GameArena from './pages/GameArena';
import NotFound from './pages/NotFound';
import ErrorPage from './pages/ErrorPage';

import { gameModes } from "./data/gameModes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/gamearena/:gameMode",
    element: <GameArena/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;