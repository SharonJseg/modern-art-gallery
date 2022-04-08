import './App.css';
import arrowRight from '../../images/icon-arrow-right.svg';
import heroImage from '../../images/desktop/image-hero@2x.jpg';
import heroImageTablet from '../../images/tablet/image-hero@2x.jpg';
import heroImageMobile from '../../images/mobile/image-hero@2x.jpg';

import galleryImage1 from '../../images/desktop/image-grid-1@2x.jpg';
import galleryImage2 from '../../images/desktop/image-grid-2@2x.jpg';
import galleryImage3 from '../../images/desktop/image-grid-3@2x.jpg';

const imageAlt =
  'A couple walking at a museum next to a huge picture of an old woman';

function App() {
  return (
    <>
      <header className='header'>
        <section className='hero'>
          <img className='hero__image' src={heroImage} alt={imageAlt} />
          <img
            className='hero__image_tab'
            src={heroImageTablet}
            alt={imageAlt}
          />
          <img
            className='hero__image_mob'
            src={heroImageMobile}
            alt={imageAlt}
          />
          <h1 className='hero__title heading-xl'>
            modern <span className='hero__title-span'>art gallery</span>
          </h1>
          <div className='hero__content'>
            <p className='text-m'>
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
            <a href='#' className='hero__button'>
              our location
              <img src={arrowRight} alt='' className='hero__button-icon' />
            </a>
          </div>
        </section>
      </header>
      <main>
        <section className='gallery'>
          <div className='your-day'>
            <div className='your-day__content'>
              <h2 className='your-day__title heading-m'>
                Your Day at the Gallery
              </h2>
              <p className='your-day__text text-m'>
                Wander through our distinct collections and find new insights
                about our artists. Dive into the details of their creative
                process.
              </p>
            </div>
            <img
              className='your-day__image'
              src={galleryImage1}
              alt='gallery image'
            />
          </div>
          <div className='inspired'>
            <img
              className='inspired__image-l'
              src={galleryImage2}
              alt='gallery image'
            />
            <div className='ispired__column'>
              <img
                className='inspired__image-m'
                src={galleryImage3}
                alt='gallery image'
              />
              <div className='inpired__content '>
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
      </main>
      <footer className='footer'></footer>
    </>
  );
}

export default App;
