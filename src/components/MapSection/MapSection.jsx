import React from 'react';
import arrowLeft from '../../images/icon-arrow-left.svg';
import './MapSection.css';

import icon from '../../images/icon-location.svg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

const getIcon = (_iconSize) => {
  return L.icon({
    iconUrl: icon,
    iconSize: [_iconSize],
  });
};

const MapSection = () => {
  const mapPosition = [32.17591, 34.91028];
  const markerPosition = [32.19, 34.91028];
  return (
    <section className='map'>
      <Link to='/modern-art-gallery/' className='location__button'>
        back to home
        <img src={arrowLeft} alt='' className='location__button-icon' />
      </Link>
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
  );
};

export default MapSection;
