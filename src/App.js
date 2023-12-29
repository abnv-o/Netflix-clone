import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mainpage from "./components/Mainpage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Movies from "./components/Movies";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="bg-black bg-opacity-80 bg-repeat bg-[url('./hero2.jpg')] bg-blend-darken ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mainpage" element={<Mainpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
