import React, { useState } from "react";
import Login from "./Component/Login";
import Body from "./Component/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Profile from "./Component/Profile";
import FoodApp from "./Component/FoodApp";

const App = () => {
  const [name, setName] = useState("Abhishek");
  return (
    <div>
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/nutrigen",
    element: <Body />,
    children: [
      {
        path: "/nutrigen",
        element: <Profile />,
      },
      {
        path: "/nutrigen/app",
        element: <FoodApp />,
      },
    ],
  },
]);

export default App;
