import React from 'react';
import './Home4.css';
import hline from '../assests/Vector 55.png';
import vline from '../assests/vertical-line.png';
import iitglogo from '../assests/IITG_logo (2) 8.png';
import hlinemobile from "../assests/Vector 64.png";
import hlinemobile1 from "../assests/Vector 62.png";
import iitglogomobile from "../assests/IITG_logo (2) 10.png";
import vlinemobile from "../assests/Vector 61.png";

const Home4 = () => {
    return (
        <div className='homepage4'>
            <div className="footer-1">
                <div className="hline">
                    <img className='hline1' src={hline} alt="" />
                </div>
                <div className="footer-1-sub">
                    <div className="techboard-head">TECHBOARD.</div>
                    <div className="vline">
                        <img className='vline1' src={vline} alt="" />
                    </div>
                    <div className="socialmedia">
                        <div className="linkedin">LINKEDIN</div>
                        <div className="linkedin">TWITTER</div>
                        <div className="linkedin">OUTLOOK</div>
                        <div className="linkedin">INSTAGRAM</div>
                        <div className="linkedin">FACEBOOK</div>
                        <div className="linkedin">GMAIL</div>
                    </div>
                </div>
                <div className="hline">
                    <img className='hline1' src={hline} alt="" />
                </div>
            </div>
            <div className="new-foot">
                <div className="footer-2">
                    <div className="iitg">
                        <div className="iitg-logo">
                            <img src={iitglogo} alt="" />
                        </div>
                        <div className="iitg-name">
                            INDIAN INSTIUITE OF TECHNOLOGY, GUWAHATI
                        </div>
                    </div>
                    <div className="vline2">
                        <img className='vline22' src={vline} alt="" />
                    </div>
                    <div className="techboard-info">
                        <div className="techboard-email">
                            techsec@iitg.ac.in
                        </div>
                        <div className="techboard-contact">
                            +91-7587817679
                        </div>
                        <div className="techboard-add">
                            Students' Gymkhana Council, New SAC Building IIT Guwahati, Guwahati (Assam) - 781039
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage4-mobile">
                <div className="hline-mobile">
                    <img src={hlinemobile} alt="" />
                </div>
                <div className="homepage4-mobile-mid">
                    <div className="techboard-iitg">
                        <div className="techboard">
                            TECHBOARD.
                        </div>
                        <div className="hline-mobile">
                            <img src={hlinemobile1} alt="" />
                        </div>
                        <div className="iitg-mobile">
                            <div className="iitg-logo-mobile">
                                <img src={iitglogomobile} alt="" />
                            </div>
                            <div className="iitg-text-mobile">
                                INDIAN INSTIUITE OF TECHNOLOGY, GUWAHATI
                            </div>
                        </div>
                    </div>
                    <div className="vline-mobile">
                        <img src={vlinemobile} alt="" />
                    </div>
                    <div className="techboard-info-mobile">
                        <div className="techboard-email-mobile">
                            techsec@iitg.ac.in
                        </div>
                        <div className="techboard-contact-mobile">
                            +91-7587817679
                        </div>
                        <div className="techboard-add-mobile">
                            Students' Gymkhana Council, New SAC Building IIT Guwahati, Guwahati (Assam) - 781039
                        </div>
                    </div>
                </div>
                <div className="homepage4-last">
                    <div className="hlinelast-mobile">
                        <img src={hlinemobile} alt="" />
                    </div>
                    <div className="socialmedia-mobile">
                        <div className="linkedin-mobile">LINKEDIN</div>
                        <div className="linkedin-mobile">TWITTER</div>
                        <div className="linkedin-mobile">OUTLOOK</div>
                        <div className="linkedin-mobile">INSTAGRAM</div>
                        <div className="linkedin-mobile">FACEBOOK</div>
                    </div>
                    <div className="hlinelast-mobile1">
                        <img src={hlinemobile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home4;
