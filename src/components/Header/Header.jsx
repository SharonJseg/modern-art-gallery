import React from 'react';
import './Header.css';

import arrowRight from '../../images/icon-arrow-right.svg';
import heroImage from '../../images/desktop/image-hero@2x.jpg';
import heroImageTablet from '../../images/tablet/image-hero@2x.jpg';
import heroImageMobile from '../../images/mobile/image-hero@2x.jpg';
const imageAlt =
  'A couple walking at a museum next to a huge picture of an old woman';

const Header = () => {
  return (
    <header className='header'>
      <section className='hero'>
        <img className='hero__image' src={heroImage} alt={imageAlt} />
        <img className='hero__image_tab' src={heroImageTablet} alt={imageAlt} />
        <img className='hero__image_mob' src={heroImageMobile} alt={imageAlt} />
        <h1 className='hero__title heading-xl'>
          modern <span className='hero__title-span'>art gallery</span>
        </h1>
        <div className='hero__content'>
          <p className='text-m'>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <a href='#' className='hero__button'>
            our location
            <img src={arrowRight} alt='' className='hero__button-icon' />
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
