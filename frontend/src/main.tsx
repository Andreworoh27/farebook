import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/authentication/Login.tsx";
import Register from "./pages/authentication/Register.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GetAllUsersPage from "./components/common/GetAllUsersPage.tsx";
import ConfirmEmailPage from "./pages/authentication/ConfirmEmailPage.tsx";
import HomePage from "./pages/Homepage.tsx";

const client = new ApolloClient({
  uri: "http://localhost:7778/query",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/errorPage",
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/confirmEmail",
    element: <ConfirmEmailPage />,
  },
  {
    path: "/getUsers",
    element: <GetAllUsersPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
