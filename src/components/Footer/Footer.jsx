import React from 'react';
import './Footer.css';

import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <h3 className='footer__title heading-s'>Modern art gallery</h3>
        <p className='footer__text text-s'>
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <ul className='footer__social-icons'>
          <li>
            <a to='/' className='social-icon__button'>
              <Icon
                name='facebook'
                height='20'
                width='20'
                className='social-icon'
              />
            </a>
          </li>

          <li>
            <a to='/' className='social-icon__button'>
              <Icon
                name='twitter'
                height='20'
                width='20'
                className='social-icon'
              />
            </a>
          </li>
          <li>
            <a to='/' className='social-icon__button'>
              <Icon
                name='instagram'
                height='20'
                width='20'
                className='social-icon'
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
