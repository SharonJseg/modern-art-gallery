import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Location from '../Location/Location';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/modern-art-gallery/' element={<Home />} />
          <Route path='/modern-art-gallery/location' element={<Location />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
