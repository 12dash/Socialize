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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/studygroup",
    element: <StudyGroup />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/meetup",
    element: <MeetUp />,
  },
  {
    path: "/user",
    element: <User />,
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
