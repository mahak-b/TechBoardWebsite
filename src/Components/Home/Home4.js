import React from 'react'
import './Home4.css'
import newsimg1 from '../assests/Nakai-e1565455792305 2.png'
import newsimg2 from '../assests/54bc0d769a7b7_-_hbz-marilyn-monroe-01-xl 1.png'
import newsimg3 from '../assests/ante-samarzija-R5HNjSTlRdo-unsplash 1.png'
import plus from "../assests/plus.png";
import hline from '../assests/Vector 31.png'
import newsimg1mobile from '../assests/Nakai-e1565455792305 3.png'
import newsimg2mobile from '../assests/54bc0d769a7b7_-_hbz-marilyn-monroe-01-xl 2.png'

const Home4 = () => {
    return (
        <div className='homepage5'>
            <div className="news-heading">NEWS.</div>
            <div className="news-content">
                <div className="news-card">
                    <div className="news-card-1">
                        <div className="news-card-1-text">
                            NEW CAR.
                        </div>
                        <img className='newsimg1' src={newsimg1} alt="" />
                        <img className='newsimg1mobile' src={newsimg1mobile} alt="" />
                    </div>
                    <div className="news-card-2">
                        <div className="news-card-2a">
                            <div className="news-card-2-text">
                                AWARDS.
                            </div>
                            <img className='newsimg2' src={newsimg2} alt="" />
                            <img className='newsimg2mobile' src={newsimg2mobile} alt="" />
                        </div>
                        <div className="news-card-2b">
                            <div className="news-card-3-text">
                                VIEWS ALL.
                            </div>
                            <div className="plus-button-img">
                                <button className="plus">
                                    <img src={plus} alt=" " />
                                </button>
                            </div>
                            <img src={newsimg3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="newstitles">
                    <div className="news-title-card">
                        <img src={hline} alt="" />
                        <div className="news-title-card-description">
                            <div className='news-title-card-description-text'>
                                Lorem Ipsum is simply dummy text of the printing
                            </div>
                            <div className="plus-button">
                                <button className="plus">
                                    <img src={plus} alt=" " />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="news-title-card">
                        <img src={hline} alt="" />
                        <div className="news-title-card-description">
                            <div className='news-title-card-description-text'>
                                Lorem Ipsum is simply dummy text of the printing
                            </div>
                            <div className="plus-button">
                                <button className="plus">
                                    <img src={plus} alt=" " />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="news-title-card">
                        <img src={hline} alt="" />
                        <div className="news-title-card-description">
                            <div className='news-title-card-description-text'>
                                Lorem Ipsum is simply dummy text of the printing
                            </div>
                            <div className="plus-button">
                                <button className="plus">
                                    <img src={plus} alt=" " />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="news-title-card">
                        <img src={hline} alt="" />
                        <div className="news-title-card-description">
                            <div className='news-title-card-description-text'>
                                Lorem Ipsum is simply dummy text of the printing
                            </div>
                            <div className="plus-button">
                                <button className="plus">
                                    <img src={plus} alt=" " />
                                </button>
                            </div>
                        </div>
                        <img src={hline} alt="" />
                    </div>
                </div>
            </div>
            <div className="news-card-2b-mobile">
                <div className="news-card-3-text-mobile">
                    VIEWS ALL.
                </div>
                <div className="plus-button-img-mobile">
                    <button className="plus-mobile">
                        <img src={plus} alt=" " />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Home4
