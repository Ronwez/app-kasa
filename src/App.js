import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Logement from './Pages/Logement';
import Error from './Pages/Error';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path='*' element={<Error/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
