import React from 'react';
import "./Home2.css";
import arrow1 from '../assests/Group9670.png'
import backimg2 from '../assests/Untitled-2.png'
import backimgmobile2 from '../assests/Untitled-21.png'

const Home2 = () => {
    return (
        <div className='homepage2'>
            <div className="backImg2">
                <img src={backimg2} alt="" />
            </div>
            <div className="backImgmobile2">
                <img src={backimgmobile2} alt="" />
            </div>
            <div></div>
            <div>
                <div className="projects-heading">
                    PROJECTS.
                </div>
                <div className="right-div-1">
                    <div className='ind-text'>INDUSTRY SPONSORED PROJECTS.</div>
                    <div className='explore-text-1'>
                        <a href='/projects'><div >EXPLORE</div></a>
                        <img src={arrow1} alt='' />
                    </div>
                </div>
            </div>
            <div>
                <div className='with-text-1'>
                    With the motto of promoting technology, creativity and innovation, With the motto of promoting technology, creativity and innovation, the Technical Board understands and believes that this fast-changing and evolving era is the perfect time to live in, and step up to shape our future by looking at the world as our playground! With the help of the 12 clubs under its umbrella, the Tech Board deals with everything ‘tech’ in IITG, from seminars and workshops to college-wide and country-wide competitions.
                </div>
                <div className='many-text-1'>
                    Many students have a creative urge in them that’s ready to shoot out at any moment. They have rightfully dreamt and believed that they were supposed to do something extraordinary and that success is written into their destiny. For the innovators and creators, the artists and those who dare to construct the future, the Technical Board exists to provide the opportunity and support to help leave a mark, make a difference and build a legacy.
                </div>
                <div className='our-part-text-1'>
                    Our part in this grand story is to fuel curiosity and nourish genius. What part will you play?
                </div>
            </div>
        </div>
    )
}

export default Home2;

