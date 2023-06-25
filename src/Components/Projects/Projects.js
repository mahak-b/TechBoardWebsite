import {useState} from "react";
import "./Projects.css";
import plus from "../assests/plus.png";
import minus from "../assests/minus.png";
import projectImage1A from "../assests/image 17.png";
import projectImage1B from "../assests/image 18.png";
import projectImage1C from "../assests/image 25.png";
import arrow from "../assests/arrow.png";

const Projects = () => {
    const [project, useProject] = useState([
        {
            name: 'PROJECT#1',club:'AERO CLUB', data:"The start of this tenure too seemed as bleak as last, with the second wave still raging on and another online semester on the horizon, we decided a quizzing event was due to liven everyone’s evenings, which lead to colligere - weekends full of quizzes based on a myriad of topics to satisfy one and all ranging from Football to memes. All in all we had 13 quizzes hosted on our facebook group involving a lot of fast typing, furious refreshing of the web page and lightning fast answers.\nThrough this multi-month extravaganza, a ton of people discovered how much fun quizzing could be. In the end, that's what it was all about, encapsulating the spirit of Acumen.\n\nAntah Prerna\nIn a collaboration with E-Cell for the annual entrepreneurship fest Udgam, Acumen held an all India business quiz with a whopping prize of Rs. 25000 for the winners and cool goodies for audience participants, hosted by Padmanabhan Pillai and Aniruddha Morarka, esteemed quizmasters from Nagpur quizzing circuit.With 1000+ registrations pan India, the quiz consisted of three stages showcasing some of the most competitive quizzing we have ever seen, ending up in a nail biting finale right up until the last question.\n\nNihilanth\nNihilanth is an annual inter-IIT-IIM quiz championship that has the country’s top-tier colleges vying for the ultimate quizzing trophy, undeniably the most distinguished event of its kind given that it has the best quizzers from the country’s best institutes pitting their wits against each other. This year was a virtual-hosted tour-de force consisting of 5 quizzes spread over three days in the middle of mid semester exams, which made it all the more exciting and hectic at the same time, juggling pre-exam mugging and mind boggling cracks. We managed to get a respectable thirteenth place out of the forty-three participating institutions, with a lot of lessons learnt and the will to bounce back stronger next year.",id:1
        },
        {
            name:'PROJECT#2.', club:'AERO CLUB', data:"The start of this tenure too seemed as bleak as last, with the second wave still raging on and another online semester on the horizon, we decided a quizzing event was due to liven everyone’s evenings, which lead to colligere - weekends full of quizzes based on a myriad of topics to satisfy one and all ranging from Football to memes. All in all we had 13 quizzes hosted on our facebook group involving a lot of fast typing, furious refreshing of the web page and lightning fast answers.Through this multi-month extravaganza, a ton of people discovered how much fun quizzing could be. In the end, that's what it was all about, encapsulating the spirit of Acumen",id:2},

        {
            name:'PROJECT#3.', club:'AERO CLUB', data:"The start of this tenure too seemed as bleak as last, with the second wave still raging on and another online semester on the horizon, we decided a quizzing event was due to liven everyone’s evenings, which lead to colligere - weekends full of quizzes based on a myriad of topics to satisfy one and all ranging from Football to memes. All in all we had 13 quizzes hosted on our facebook group involving a lot of fast typing, furious refreshing of the web page and lightning fast answers.Through this multi-month extravaganza, a ton of people discovered how much fun quizzing could be. In the end, that's what it was all about, encapsulating the spirit of Acumen",id:3
        },
        {
            name:'PROJECT#4.', club:'AERO CLUB', data:"The start of this tenure too seemed as bleak as last, with the second wave still raging on and another online semester on the horizon, we decided a quizzing event was due to liven everyone’s evenings, which lead to colligere - weekends full of quizzes based on a myriad of topics to satisfy one and all ranging from Football to memes. All in all we had 13 quizzes hosted on our facebook group involving a lot of fast typing, furious refreshing of the web page and lightning fast answers.Through this multi-month extravaganza, a ton of people discovered how much fun quizzing could be. In the end, that's what it was all about, encapsulating the spirit of Acumen",id:4
        },
        {
            name:'PROJECT#5.', club:'AERO CLUB', data:"The start of this tenure too seemed as bleak as last, with the second wave still raging on and another online semester on the horizon, we decided a quizzing event was due to liven everyone’s evenings, which lead to colligere - weekends full of quizzes based on a myriad of topics to satisfy one and all ranging from Football to memes. All in all we had 13 quizzes hosted on our facebook group involving a lot of fast typing, furious refreshing of the web page and lightning fast answers.Through this multi-month extravaganza, a ton of people discovered how much fun quizzing could be. In the end, that's what it was all about, encapsulating the spirit of Acumen",id:5
        },
        {
            name:'PROJECT#6.', club:'AERO CLUB', data:"The start of this tenure too seemed as bleak as last, with the second wave still raging on and another online semester on the horizon, we decided a quizzing event was due to liven everyone’s evenings, which lead to colligere - weekends full of quizzes based on a myriad of topics to satisfy one and all ranging from Football to memes. All in all we had 13 quizzes hosted on our facebook group involving a lot of fast typing, furious refreshing of the web page and lightning fast answers.Through this multi-month extravaganza, a ton of people discovered how much fun quizzing could be. In the end, that's what it was all about, encapsulating the spirit of Acumen",id:6
        },
        {
            name:'PROJECT#7.', club:'AERO CLUB', data:"The start of this tenure too seemed as bleak as last, with the second wave still raging on and another online semester on the horizon, we decided a quizzing event was due to liven everyone’s evenings, which lead to colligere - weekends full of quizzes based on a myriad of topics to satisfy one and all ranging from Football to memes. All in all we had 13 quizzes hosted on our facebook group involving a lot of fast typing, furious refreshing of the web page and lightning fast answers.Through this multi-month extravaganza, a ton of people discovered how much fun quizzing could be. In the end, that's what it was all about, encapsulating the spirit of Acumen",id:7
        },
        {
            name:'PROJECT#8.', club:'AERO CLUB', data:"The start of this tenure too seemed as bleak as last, with the second wave still raging on and another online semester on the horizon, we decided a quizzing event was due to liven everyone’s evenings, which lead to colligere - weekends full of quizzes based on a myriad of topics to satisfy one and all ranging from Football to memes. All in all we had 13 quizzes hosted on our facebook group involving a lot of fast typing, furious refreshing of the web page and lightning fast answers.Through this multi-month extravaganza, a ton of people discovered how much fun quizzing could be. In the end, that's what it was all about, encapsulating the spirit of Acumen",id:8
        }

    ]);

    const[expandedProjectId, setExpandedProjectId] = useState(null);

    const toggleProjectDetails= (id) => {
        if (expandedProjectId===id){
            setExpandedProjectId(null);
        }
        else {
            setExpandedProjectId(id);
        }
    }

    return (
        <div className="project-list">
            <div className="project-header">
                <div className="project-first-line">    PROJECTS    PROJECTS    </div>
                <div className="project-second-line">JECTS    PROJECTS    PROJECTS</div>
            </div>
            {project.map((project)=>(
                <div className="project-name" key={project.id}>
                    <div className="project-preview">
                        {project.name}
                        <div className="plus-button">
                            <button className="plus" onClick={() => toggleProjectDetails(project.id)}>
                                {expandedProjectId === project.id ? (<img src={minus} alt=" " />):(<img src={plus} alt=" " />)}
                            </button>
                        </div>
                    </div>
                    {expandedProjectId === project.id && (<div className="project-overview">
                        {/* <div className="project-clubname">
                            <header>{project.club}</header>
                        </div> */}
                        <div className="project-data">
                            <p>{project.data}</p>
                        </div>
                        <div className="project-image">
                            <div className="project-blank">
                                <div className="project-visit">
                                    AERO<br /> CLUB.
                                </div>
                                <div className="project-explore-box">
                                    <div className="project-explore">EXPLORE</div>
                                    <button>
                                        <img src={arrow} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className="project-image-container">
                                <div className="project-image-container-1">
                                    <img src={projectImage1A} className="project-img1" alt=""/>
                                    <img src={projectImage1C} className="project-img3" alt=""/>
                                </div>
                                <div className="project-image-container-2">
                                    <img src={projectImage1B} className="project-img2" alt=""/>
                                </div>
                            </div>
                        </div>
                </div>)}
            </div>
            ))}
        </div>
     );
}
 
export default Projects;
