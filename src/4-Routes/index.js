import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../6-Views/1Home/Home';
import ErrorPage from '../6-Views/0ErrorPage/ErrorPage';
import SignIn from '../6-Views/2Auth/SignIn';
import Register from '../6-Views/2Auth/Register';
import Verification from '../6-Views/2Auth/Verification';
import RegisteredSuccess from '../6-Views/2Auth/RegisteredSuccess';
import About from '../6-Views/3About/About';
import Press from '../6-Views/4Press/Press';
import ContactUs from '../6-Views/5ContactUs/ContactUs';
import Films from '../6-Views/6Films/Films';
import FilmDetails from '../6-Views/7FilmDetails/FilmDetails';
import WatchFilm from '../6-Views/8WatchFilm/WatchFilm';
import Tickets from '../6-Views/9Tickets/Tickets';
import TicketBooking from '../6-Views/10TicketBooking/TicketBooking';
import CheckOut from '../6-Views/11Checkout/CheckOut';
import Checkout2 from '../6-Views/11Checkout/Checkout2';
const AllRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route
          exact
          path="/signin"
          element={<SignIn />}
          errorElement={<ErrorPage />}
        />
        <Route
          exact
          path="/register"
          element={<Register />}
          errorElement={<ErrorPage />}
        />
        <Route
          exact
          path="/verify"
          element={<Verification />}
          errorElement={<ErrorPage />}
        />
        <Route
          exact
          path="/registersuccess"
          element={<RegisteredSuccess />}
          errorElement={<ErrorPage />}
        />

        <Route
          exact
          path="/about"
          element={<About />}
          errorElement={<ErrorPage />}
        />

        <Route
          exact
          path="/about/press"
          element={<Press />}
          errorElement={<ErrorPage />}
        />

        <Route
          exact
          path="/about/contactus"
          element={<ContactUs />}
          errorElement={<ErrorPage />}
        />

        <Route
          exact
          path="/films"
          element={<Films />}
          errorElement={<ErrorPage />}
        />

        <Route
          exact
          path="/films/filmId"
          element={<FilmDetails />}
          errorElement={<ErrorPage />}
        />

        <Route
          exact
          path="/films/filmId/watch"
          element={<WatchFilm />}
          errorElement={<ErrorPage />}
        />

        <Route
          exact
          path="/theatres"
          element={<Tickets />}
          errorElement={<ErrorPage />}
        />

        <Route
          exact
          path="/theatres/booking"
          element={<TicketBooking />}
          errorElement={<ErrorPage />}
        />

        <Route
          exact
          path="/theatres/booking/checkout"
          element={<Checkout2 />}
          errorElement={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;