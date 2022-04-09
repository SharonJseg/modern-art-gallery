import './App.css';
import arrowLeft from '../../images/icon-arrow-left.svg';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';
import icon from '../../images/icon-location.svg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const getIcon = (_iconSize) => {
  return L.icon({
    iconUrl: icon,
    iconSize: [_iconSize],
  });
};

function App() {
  const mapPosition = [32.17591, 34.91028];
  const markerPosition = [32.19, 34.91028];

  return (
    <>
      <header>
        <section className='map'>
          <a href='#' className='location__button'>
            our location
            <img src={arrowLeft} alt='' className='location__button-icon' />
          </a>
          <MapContainer
            center={mapPosition}
            zoom={13}
            zoomControl={false}
            scrollWheelZoom={false}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={markerPosition} icon={getIcon(60, 80)}>
              <Popup>What's up sharon?</Popup>
            </Marker>
          </MapContainer>
        </section>
      </header>

      <main>
        <section className='location'>
          <div className='location__wrapper'>
            <h2 className='location__title heading-l'>our location</h2>
            <div className='location__column'>
              <h3 className='location__street heading-s'>99 king street</h3>
              <p className='location__address text-m'>
                Newport <br />
                RI 02840 <br />
                United States of America
              </p>
              <p className='location__instructions text-m'>
                Our newly opened gallery is located near the Edward King House
                on 99 King Street, the Modern Art Gallery is free to all
                visitors and open seven days a week from 8am to 9pm.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* <Header />
      <main>
        <Gallery />
      </main> */}
      <Footer />
    </>
  );
}

export default App;
