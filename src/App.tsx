import { RouterProvider } from "react-router-dom";
import { router } from "./rotas/router";

export function App() {
  return (
    <RouterProvider router={router} />
  )
}


