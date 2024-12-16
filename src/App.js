import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { ContactUs } from "./components/ContactUs";
import { Outlet } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ErrorElement from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      {/*React-router fill the outlet with the component from children based on the url */}
      <Outlet></Outlet>
      {/* other way to do it is like this
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About></About>
          </Suspense>
        ),
      },
      { path: "/contactUs", element: <ContactUs></ContactUs> },
      {
        path: "/Groceries",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery></Grocery>
          </Suspense>
        ),
      },
      { path: "/restaurant/:id", element: <RestaurantMenu></RestaurantMenu> },
    ],
    errorElement: <ErrorElement></ErrorElement>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
