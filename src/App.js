import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
                <Route path='/' element={<Home />} />
          </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
