import React from 'react';
import './Address.css';

const Address = () => {
  return (
    <section className='address'>
      <div className='address__wrapper'>
        <h2 className='address__title heading-l'>our location</h2>
        <div className='address__column'>
          <h3 className='address__street heading-s'>99 king street</h3>
          <p className='address__address text-m'>
            Newport <br />
            RI 02840 <br />
            United States of America
          </p>
          <p className='address__instructions text-m'>
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Address;
