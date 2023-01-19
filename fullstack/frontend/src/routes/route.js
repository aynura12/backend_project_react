import Home from "../component/Home";
import MainRoot from "../component/MainRoot";
import Add from "../page/Add";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      { path: "", 
      element: <Home/>
     },
      { path: "add", element: <Add /> },
    ],
  },
];
