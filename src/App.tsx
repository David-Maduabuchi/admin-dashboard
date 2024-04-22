import Home from "./pages/home/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/menu/Menu";
import Login from "./pages/Login/Login";
import "./styles/global.scss";
import Footer from "./components/footer/Footer";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {

  
  // In here we are going to create a layout for the whole app
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  //Here we are defining the routes that we are using throughput the app
  const router = createBrowserRouter([
    {
      path: "/admin-dashboard/",
      element: <Layout />,
      children: [
        {
          path: "/admin-dashboard/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },

        //this is the trick shot at this.. go back to the users page
        // and observe how he used the <Link to stuff, the trick is there
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
