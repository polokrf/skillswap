import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Error from "../Error/Error";
import Home from "../Layout/Home";
import SkillsDetails from "../Page/SkillsDetails";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Privetrouter from "../PrivetRoute/Privetrouter";
import Profile from "../Layout/Profile";
import UpdateProfile from "../Page/UpdateProfile";
import Google from "../Page/Google";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/profile',
        element: (
          <Privetrouter>
            <Profile></Profile>
          </Privetrouter>
        ),
      },
      {
        path: '/update',
        element: (
          <Privetrouter>
            <UpdateProfile></UpdateProfile>
          </Privetrouter>
        ),
      },
      {
        path: '/details/:id',
        element: (
          <Privetrouter>
            <SkillsDetails></SkillsDetails>
          </Privetrouter>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/reset',
        element:<Google></Google>
      }
    ],
  },
]);

export default router;