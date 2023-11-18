import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Event from "./components/event/Event";
import StudyGroup from "./components/studyGroup/StudyGroup";
import Create from "./components/create/Create";
import MeetUp from "./components/meetup/MeetUp";
import User from "./components/user/User";
import Specific from "./components/specific/Specific";

const URL = "https://4xk070et44.execute-api.us-east-1.amazonaws.com/dev"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home url = {URL}/>,
  },
  {
    path: "/event",
    element: <Event url = {URL}/>,
  },
  {
    path: "/studygroup",
    element: <StudyGroup url = {URL}/>,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/meetup",
    element: <MeetUp url = {URL}/>,
  },
  {
    path: "/user",
    element: <User url = {URL}/>,
  },
  {
    path: "/specific",
    element: <Specific />,
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar userName="John Doe"/>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
