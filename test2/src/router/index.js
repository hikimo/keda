import {
  createBrowserRouter
} from "react-router-dom";

// Pages
import HomePage from "../pages/home";
import LoginPage from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "about",
    element: (
      <div>About Page</div>
    )
  },
  {
    path: "login",
    element: <LoginPage />
  }
]);