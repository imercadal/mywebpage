import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./views/home";
import Cinematography from './views/cinematography';
import About from './views/about';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cinematography" element={ <Cinematography/> } />
        <Route path='/about' element={ <About/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
