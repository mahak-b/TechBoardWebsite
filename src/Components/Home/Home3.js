import React from 'react';
import arrow from '../assests/Group9670.png';
import './Home3.css';
import backimg3 from '../assests/jorge-rojas.png'
import backimgmobile3 from '../assests/jorge-rojas--2.png'

const Home3 = () => {
    return (
        <div className='homepage3'>
            <div className="backImg3">
                <img src={backimg3} alt="" />
            </div>
            <div className="backImgmobile3">
                <img src={backimgmobile3} alt="" />
            </div>
            <div>
                <div>
                    <div className='inter-heading'>INTER</div>
                    <div className='techmeet-text'>IIT TECHMEET.</div>
                </div>
                <div className='right-div-2'>
                    <div className='problem-statement-text'>PROBLEM STATEMENT.</div>
                    <div className='explore-text-2'>
                        <div>EXPLORE</div>
                        <img src={arrow} alt='' />
                    </div>
                </div>
            </div>
            <div>
                <div className='catered-text'>
                    Catered towards advancing technology and human lives via innovation and creativity, the Inter IIT Tech Meet is an annual tech competition whose 9th edition was hosted by IIT Guwahati. The meet aims to share knowledge and promote networking while bolstering innovative thinking in the domain of real-life challenges through its competitive format.
                </div>
                <div className='with-pandemic-text'>
                    With the pandemic looming large over the heads of people all around the country, the 9th Inter IIT Tech Meet was very fittingly focused in and around building a self-reliant, progressive India as we bounce back on our feet. In times of paranoia, the possibility of rejuvenating the spirits of citizens and bringing about impactful changes was everything this year's tech meet stood for.
                </div>
                <div className='contigent-text'>
                    IITG’s contingents for this year’s Inter IIT Tech Meet braved through one of the toughest meets in recent years and came out with their heads held high, doing the entire college proud. With three golds and three silvers, IIT Guwahati stood 4th overall in the 9th Inter IIT Tech Meet.
                </div>
                <div className='with-pandemic-mobile-text'>
                    With the pandemic looming large over the heads of people all around the country, the 9th Inter IIT Tech Meet was very fittingly focused in and around building a self-reliant, progressive India as we bounce back on our feet. In times of paranoia, the possibility of rejuvenating the spirits of citizens and bringing about impactful changes was everything this year's tech meet stood for.
                </div>
                <div className='contigent-mobile-text'>
                    IITG’s contingents for this year’s Inter IIT Tech Meet braved through one of the toughest meets in recent years and came out with their heads held high, doing the entire college proud. With three golds and three silvers, IIT Guwahati stood 4th overall in the 9th Inter IIT Tech Meet.
                </div>
            </div>
        </div >
    )
}

export default Home3;
