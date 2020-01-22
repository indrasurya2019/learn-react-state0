import React from 'react';
import '../style/style.css';
import prg1 from '../img/program1.jpeg';
import prg2 from '../img/program2.jpeg';
import prg3 from '../img/program3.jpeg';

export default function MyCard() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-4'>
          <div className='card' style={{ width: '18rem' }}>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'
            >
              <ol className='carousel-indicators'>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='0'
                  className='active'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='1'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='2'
                ></li>
              </ol>
              <div className='carousel-inner'>
                <div className='carousel-item active' data-interval='5000'>
                  <img className='d-block w-100' src={prg1} alt='First slide' />
                </div>
                <div className='carousel-item'>
                  <img
                    className='d-block w-100'
                    src={prg2}
                    alt='Second slide'
                  />
                </div>
                <div className='carousel-item'>
                  <img className='d-block w-100' src={prg3} alt='Third slide' />
                </div>
              </div>
              <a
                className='carousel-control-prev'
                href='#carouselExampleIndicators'
                role='button'
                data-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#carouselExampleIndicators'
                role='button'
                data-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>

            <div className='card-body'>
              <h3>Python Programming</h3>
              <p className='card-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                laudantium dolor! Id in vitae dicta minima tempora ab sed amet,
                qui, iste quos hic. Eum
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card' style={{ width: '18rem' }}>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'
            >
              <ol className='carousel-indicators'>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='0'
                  className='active'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='1'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='2'
                ></li>
              </ol>
              <div className='carousel-inner'>
                <div className='carousel-item active' data-interval='5000'>
                  <img className='d-block w-100' src={prg1} alt='First slide' />
                </div>
                <div className='carousel-item'>
                  <img
                    className='d-block w-100'
                    src={prg2}
                    alt='Second slide'
                  />
                </div>
                <div className='carousel-item'>
                  <img className='d-block w-100' src={prg3} alt='Third slide' />
                </div>
              </div>
              <a
                className='carousel-control-prev'
                href='#carouselExampleIndicators'
                role='button'
                data-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#carouselExampleIndicators'
                role='button'
                data-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>

            <div className='card-body'>
              <h3>JS ES6 Programming</h3>
              <p className='card-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                laudantium dolor! Id in vitae dicta minima tempora ab sed amet,
                qui, iste quos hic. Eum
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card' style={{ width: '18rem' }}>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'
            >
              <ol className='carousel-indicators'>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='0'
                  className='active'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='1'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='2'
                ></li>
              </ol>
              <div className='carousel-inner'>
                <div className='carousel-item active' data-interval='5000'>
                  <img className='d-block w-100' src={prg1} alt='First slide' />
                </div>
                <div className='carousel-item'>
                  <img
                    className='d-block w-100'
                    src={prg2}
                    alt='Second slide'
                  />
                </div>
                <div className='carousel-item'>
                  <img className='d-block w-100' src={prg3} alt='Third slide' />
                </div>
              </div>
              <a
                className='carousel-control-prev'
                href='#carouselExampleIndicators'
                role='button'
                data-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#carouselExampleIndicators'
                role='button'
                data-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>

            <div className='card-body'>
              <h3>Java 11 Programming</h3>
              <p className='card-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                laudantium dolor! Id in vitae dicta minima tempora ab sed amet,
                qui, iste quos hic. Eum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
