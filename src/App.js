import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Landing from "./pages/Landing";
import GameInfo from "./pages/GameInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/game/:id",
    element: <GameInfo />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
