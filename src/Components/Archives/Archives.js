import React from 'react';
import './Archives.css';
import hline from '../assests/hline-archives.jpg'
import archiveImg1 from '../assests/rauh-welt-porsche.png'
import archiveImg1mobile from '../assests/rauh-welt-porsche-nakai-san-dubai-uae-045 19.png'
import archiveImg2 from '../assests/im-553881 1.png'
import archiveImg3 from '../assests/Coachella-724x302 1.png'
import arrow from '../assests/Group9670.png';
import hlinemobile from '../assests/Vector 39.png'
const Archives = () => {
    return (
        <div>
            <div className="archives-line">CHIVES. ARCHIVES. ARCHIVES</div>
            <div className='horizontal-line'>
                <img className='horizontal-line-1' src={hline} alt="" />
                <img className='horizontal-line-mobile' src={hlinemobile} alt="" />
            </div>
            <div className="archives">
                <div className="archive-element-1">
                    <div className='archive-element-1-content'>
                        <div className='right-div-archive1'>
                            <div className='auto-text-1'>AUTOMOBILE CLUB.</div>
                            <div className='explore-text-archive1'>
                                <div>EXPLORE</div>
                                <img className='arrow' src={arrow} alt='' />
                            </div>
                        </div>
                        <div className='archive-element-1-date'>
                            <div className='archive-element-1-date-year'>
                                2023
                            </div>
                            <div className='archive-element-1-date-month'>
                                APRIL 10
                            </div>
                        </div>
                        <div className='archive-element-1-content-img'>
                            <img className='archiveimg1' src={archiveImg1} alt="" srcset="" />
                            <img className='archiveimg1mobile' src={archiveImg1mobile} alt="" srcset="" />
                        </div>
                    </div>
                    <div className='archive-element-1-text'>
                        {/* <div>Nihilanth</div>  */}
                        Nihilanth is an annual inter-IIT-IIM quiz championship that has the country’s top-tier colleges vying for the ultimate quizzing trophy, undeniably the most distinguished event of its kind given that it has the best quizzers from the country’s best institutes pitting their wits against each other. This year was a virtual-hosted tour-de force consisting of 5 quizzes spread over three days in the middle of mid semester exams, which made it all the more exciting and hectic at the same time, juggling pre-exam mugging and mind boggling cracks. We managed to get a respectable thirteenth place out of the forty-three participating institutions, with a lot of lessons learnt and the will to bounce back stronger next year.
                    </div>
                </div>
                <div className="archive-element-2">
                    <div className='archive-element-2-text'>
                        {/* <div>Nihilanth</div>  */}
                        Nihilanth is an annual inter-IIT-IIM quiz championship that has the country’s top-tier colleges vying for the ultimate quizzing trophy, undeniably the most distinguished event of its kind given that it has the best quizzers from the country’s best institutes pitting their wits against each other. This year was a virtual-hosted tour-de force consisting of 5 quizzes spread over three days in the middle of mid semester exams, which made it all the more exciting and hectic at the same time, juggling pre-exam mugging and mind boggling cracks. We managed to get a respectable thirteenth place out of the forty-three participating institutions, with a lot of lessons learnt and the will to bounce back stronger next year.
                    </div>
                    <div className='archive-element-2-content'>
                        <div className='right-div-archive2'>
                            <div className='auto-text-2'>WINNERS.</div>
                            <div className='explore-text-archive2'>
                                <div>EXPLORE</div>
                                <img  src={arrow} alt='' />
                            </div>
                        </div>
                        <div className='archive-element-2-date'>
                            <div className='archive-element-2-date-year'>
                                2023
                            </div>
                            <div className='archive-element-2-date-month'>
                                APRIL 10
                            </div>
                        </div>
                        <div className='archive-element-2-content-img'>
                            <img src={archiveImg2} alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="archive-element-3">
                    <div className='archive-element-3-content'>
                        <div className='right-div-archive3'>
                            <div className='auto-text-3'>FESTIVAL.</div>
                            <div className='explore-text-archive3'>
                                <div>EXPLORE</div>
                                <img src={arrow} alt='' />
                            </div>
                        </div>
                        <div className='archive-element-3-date'>
                            <div className='archive-element-3-date-year'>
                                2023
                            </div>
                            <div className='archive-element-3-date-month'>
                                APRIL 10
                            </div>
                        </div>
                        <div className='archive-element-3-content-img'>
                            <img src={archiveImg3} alt="" srcset="" />
                        </div>
                    </div>
                    <div className='archive-element-3-text'>
                        {/* <div>Nihilanth</div>  */}
                        Nihilanth is an annual inter-IIT-IIM quiz championship that has the country’s top-tier colleges vying for the ultimate quizzing trophy, undeniably the most distinguished event of its kind given that it has the best quizzers from the country’s best institutes pitting their wits against each other. This year was a virtual-hosted tour-de force consisting of 5 quizzes spread over three days in the middle of mid semester exams, which made it all the more exciting and hectic at the same time, juggling pre-exam mugging and mind boggling cracks. We managed to get a respectable thirteenth place out of the forty-three participating institutions, with a lot of lessons learnt and the will to bounce back stronger next year.
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Archives;
