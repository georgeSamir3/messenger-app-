import "./App.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import AuthProvider from "./context/auth";
import React from "react";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <React.Fragment>
            <PrivateRoute path="/" element={<Home></Home>}></PrivateRoute>
          </React.Fragment> */}
          <Route exact path="/register" element={<Register></Register>} />
          <Route exact path="/login" element={<Login></Login>} />
          {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route exact path="/" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
