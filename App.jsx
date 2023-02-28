import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Service from "./components/Service";
import About from "./components/About";
import Booking from "./components/Booking";
import ServicesTour from "./components/ServicesTour";
import ServiceTour from "./components/ServiceTour";
import ItemDetail from "./components/ItemDetail";






function App() {
  return (
    <div className="app">
      <Navbar />

      {/** Componente di React che gestisce le rotte (sa come fare il redirect) */}
      <Routes>
        {/** Componente che gestisce la singola rotta */}
        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
     
        <Route path="/contact" element={<Contact />} />

        <Route path="/booking/:id" element={<Booking />} />

        <Route path="/items/:id" element={<ItemDetail />} />
       
        
     
        
        {/** Nested Routes, posso avere tante sotto rotte (anche senza un parametro) */}
        <Route path="/services" element={<Services />}>
          <Route path=":paramID" element={<Service />}></Route>
        </Route>

        <Route path="/servicestour" element={<ServicesTour />}>
          <Route path=":paramID" element={<ServiceTour />}></Route>
        </Route>


        <Route path="/about" element={<About />} />

        {/** TODO: Creare componente NotFound */}
        <Route
          path="*"
          element={<h1 className="not_found">Page not found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
