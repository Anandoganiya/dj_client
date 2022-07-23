import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  LogIn,
  Register,
  Dashboard,
  UserProfile,
  DjProfile,
  BookingRequest,
  Messages,
} from "./pages";
import { Layout } from "./components";
import ProtectedRoutes from "./helper/ProtectedRoutes";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route index path="/" element={<Dashboard />}></Route>
            <Route path="/booking-request" element={<BookingRequest />}></Route>
            <Route path="/user-profile" element={<UserProfile />}></Route>
            <Route path="/dj-week" element={<DjProfile />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
          </Route>
        </Route>

        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
