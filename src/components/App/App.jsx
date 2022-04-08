import './App.css';
import arrowLeft from '../../images/icon-arrow-left.svg';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  const position = [32.17591, 34.91028];

  return (
    <>
      <header>
        <section className='location' id='map'>
          {/* <a href='#' className='location__button'>
            <img src={arrowLeft} alt='' className='location__button-icon' />
            our location
          </a> */}
          <MapContainer center={position} zoom={13} zoomControl={false}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={position}>
              <Popup>What's up sharon?</Popup>
            </Marker>
          </MapContainer>
        </section>
      </header>

      {/* <Header />
      <main>
        <Gallery />
      </main> */}
      <Footer />
    </>
  );
}

export default App;
