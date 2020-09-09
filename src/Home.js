import React from 'react'
import './Home.css'
import {Product}  from './Product'

export const Home = () => {
    return (
        <div className='home'>
            <img className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt=''
            />
           <div className='home__row'>
           <Product 
            id='123'
            title='SonyHoliday Bundle - Playstation 4 1TB Slim- Jet Black'
            price={28000}
            rating={4}
            image='https://m.media-amazon.com/images/I/61yTg6KpelL._AC_UY218_.jpg'
            />
             <Product 
            id='1234'
            title='The Wimpy Kid Movie Diary: How Greg Heffley…
            Jeff Kinney'
            price={630}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/916Uib9Sh9L._AC_UL320_SR216,320_.jpg'
            />
           </div>

           <div className='home__row'>
           <Product 
            id='12345'
            title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver'
            price={35000}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg'
            />
            <Product 
            id='123456'
            title='Livho 2 Pack Blue Light Blocking Glasses, Computer Reading/Gaming/TV/Phones Glasses for Women Men,Anti'
            price={1400}
            rating={5}
            image='https://m.media-amazon.com/images/I/61pRnuYNOAL._AC_UY218_.jpg'
            />
            <Product 
            id='1234567'
            title='Samsung Galaxy Buds Live, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included), Mystic'
            price={11999}
            rating={5}
            image='https://m.media-amazon.com/images/I/71LcAql4+aL._AC_UY218_.jpg'
            />
           </div>

           <div className='home__row'>
           <Product 
            id='12345678'
            title='1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming, Online Classes'
            price={3500}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/41QyeCl1kGL._AC_US160_.jpg'
            />
           </div>
        </div>
    )
}
