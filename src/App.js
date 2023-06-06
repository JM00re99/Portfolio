import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { MaterialMaximise } from "./components/MaterialMaximise";
import { BigSoipa } from "./components/BigSoipa";
import { TrustExchange } from "./components/TrustExchange";
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<div><Banner /><Skills /><Projects /><Contact /></div>} />
      <Route path='/* /index.html 200/ProjectMaterialMaxisime' element={<div><MaterialMaximise /></div>} />
      <Route path='/* /index.html 200/ProjectBigSoipa' element={<div><BigSoipa /></div>} />
      <Route path='/* /index.html 200/ProjectTrustExchange' element={<div><TrustExchange /></div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

