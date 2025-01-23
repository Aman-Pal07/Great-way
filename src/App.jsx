import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import Track from "./pages/TrackOrder/Track";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/track-order" element={<Track />} />
      </Routes>
    </>
  );
};

export default App;
