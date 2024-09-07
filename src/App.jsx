import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Filter from "./Components/Filter";
import SingleData from "./Components/SingleData";
import DataDisplay from "./Components/DataDisplay";
import Nav from "./Components/Nav";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://project22.vercel.app/vehicles")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Filter"
          element={<Filter data={data} setData={setData} />}
        />
        <Route
          path="/Reviews"
          element={<Reviews data={data} setData={setData} />}
        />
        <Route
          path="/SingleData/:id"
          element={<SingleData data={data} setData={setData} />}
        />
        <Route
          path="/DataDisplay"
          element={<DataDisplay data={data} setData={setData} />}
        />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
