import React from 'react';
import './Gallery.css';

import galleryImage1 from '../../images/desktop/image-grid-1@2x.jpg';
import galleryImage2 from '../../images/desktop/image-grid-2@2x.jpg';
import galleryImage3 from '../../images/desktop/image-grid-3@2x.jpg';

const Gallery = () => {
  return (
    <section className='gallery'>
      <div className='your-day'>
        <div className='your-day__content'>
          <h2 className='your-day__title heading-m'>
            Your Day <span>at the Gallery </span>
          </h2>
          <p className='your-day__text text-m'>
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
        <div className='your-day__image-container'>
          <img
            className='your-day__image'
            src={galleryImage1}
            alt='gallery image'
          />
        </div>
      </div>
      <div className='inspired'>
        <div className='inspired__column_one'>
          <img
            className='inspired__image-l'
            src={galleryImage2}
            alt='gallery image'
          />
        </div>
        <div className='inspired__column_two'>
          <img
            className='inspired__image-m'
            src={galleryImage3}
            alt='gallery image'
          />
          <div className='inpired__content'>
            <h2 className='inspired__title heading-m'>
              COME & <br /> BE INSPIRED
            </h2>
            <p className='inspired__text text-m'>
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
