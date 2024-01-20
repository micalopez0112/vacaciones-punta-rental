import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./home/Home";
import "./App.css";
import Apartments from "./components/apartments/Apartments";
import ApartmentDetail from "./components/apartmentDetail/ApartmentDetail";
import { Route, Routes } from "react-router-dom";
import Services from "./components/services/Services";
import ThingsToDo from "./components/things-to-do/ThingsToDo";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/apartments/apartment/:id" element={<ApartmentDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/contact" element={<Contact />} />

        {/*
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
