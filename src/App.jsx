import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Fotter";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Implementacion from "./pages/Implemetacion";
const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<Implementacion />} />

          
         
          {/* Agrega más rutas aquí según sea necesario */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};



export default App;
