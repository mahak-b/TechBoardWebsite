import React from 'react';
import arrow from '../assests/Group9670.png';
import './Home1.css';
import backimg1 from '../assests/iisc.png'
import backimgmobile1 from '../assests/iisc2.png'

const Home1 = () => {
    return (
        <div className='homepage1'>
            <div className="backImg1">
                <img src={backimg1} alt="" />
            </div>
            <div className="backImgmobile1">
                <img src={backimgmobile1} alt="" />
            </div>
            <div>
                <div>
                    <div className='techboard-heading'>TECHBOARD.</div>
                    <div className='who-we-are-text'>WHO WE ARE?</div>
                </div>
                <div className='right-div'>
                    <div className='archives-text'>ARCHIVES.</div>
                    <div className='explore-text'>
                        <a href='/archives'><div >EXPLORE</div></a>
                        <img src={arrow} alt='' />
                    </div>
                </div>
            </div>
            <div>
                <div className='with-text'>
                    With the motto of promoting technology, creativity and innovation, With the motto of promoting technology, creativity and innovation, the Technical Board understands and believes that this fast-changing and evolving era is the perfect time to live in, and step up to shape our future by looking at the world as our playground! With the help of the 12 clubs under its umbrella, the Tech Board deals with everything ‘tech’ in IITG, from seminars and workshops to college-wide and country-wide competitions.
                </div>
                <div className='many-text'>
                    Many students have a creative urge in them that’s ready to shoot out at any moment. They have rightfully dreamt and believed that they were supposed to do something extraordinary and that success is written into their destiny. For the innovators and creators, the artists and those who dare to construct the future, the Technical Board exists to provide the opportunity and support to help leave a mark, make a difference and build a legacy.
                </div>
                <div className='our-part-text'>
                    Our part in this grand story is to fuel curiosity and nourish genius. What part will you play?
                </div>
            </div>
        </div >
    )
}

export default Home1;
