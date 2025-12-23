import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import MyBookings from "./pages/MyBookings";
import Favourite from "./pages/Favourite";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { initLenis, destroyLenis } from "./lib/lenis";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    initLenis();

    return () => {
      destroyLenis();
    };
  }, []);

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
