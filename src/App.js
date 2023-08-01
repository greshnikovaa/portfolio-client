import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
