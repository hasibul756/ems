import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import ListEmp from "./ListEmp";
import AddEmp from "./AddEmp";
import ViewEmp from "./ViewEmp";
import ListProvider from "./ListProvider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <div>404 Not Found</div>,
      children: [
        {
          index: true,
          element: <ListEmp />,
        },
        {
          path: "/about",
          element: <div>About Page</div>,
        },
        {
          path: "/contact",
          element: <div>Contact Page</div>,
        },
        {
          path: "/add",
          element: <AddEmp />,
        },
        {
          path: "/view/:empId",
          element: <ViewEmp />,
        },
      ],
    },
  ]);

  return (
    <>
    <ListProvider>
      <RouterProvider router={router} />;
    </ListProvider>
    </>
  );
};

export default App;
