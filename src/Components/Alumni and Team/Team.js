import chairmanImage from "../assests/chairman.png";
import { useState,useEffect } from "react";
import "./team.css";
import sanityClient from "../../client";
const Team = () => {
    const[teams,setTeams]=useState(null);
    const [error,setError]=useState(null);
    useEffect(() => {
        sanityClient
			.fetch(
				`*[_type == "team"]{
                    name,
                    id,
                    branch,
                    position,
                    img{
                        asset->{
                            _id,
                            url,
                        },
                        alt
                    }
                }`
			)
			.then((data) =>{ setTeams(data);
            console.log(data);})
			.catch(console.error);
      }, []);
      const [expandedClubId, setExpandedClubId] = useState(null);

      const toggleClubDetails = (id) => {
        if (expandedClubId === id) {
          setExpandedClubId(null);
        } else {
          setExpandedClubId(id);
        }
      };
    return ( 
        <div className="team">
            <div className="at-header">
                <div className="at-line">TEAM  ALUMNI  TEAM  ALUMNI</div>
            </div>
            <div className="chairman">
                <div className="chairman-details">
                    <div className="alm-pos">
                        CHAIRMAN
                        <sup className="alm-year">2023</sup>
                    </div>
                    <div className="chairman-image">
                        <img src={chairmanImage} className="chairman-img" alt="" />
                    </div>
                    <div className="alm-name">
                        ALFAS KHADER<br/>
                        ASSISTANT PROFESSOR<br/>
                        DEPT. OF DESIGN
                    </div>
                </div>
                <div className="chairman-tab">
                    <p className="chairman-title">CHAIR MAN’S TABLE </p>
                    <p className="chairman-data">
                        <p>The start of this tenure too seemed as bleak as last, with the second wave still raging on and another online semester on the horizon, we decided a quizzing event was due to liven everyone’s evenings, which lead to colligere - weekends full of quizzes based on a myriad of topics to satisfy one and all ranging from Football to memes. All in all we had 13 quizzes hosted on our facebook group involving a lot of fast typing, furious refreshing of the web page and lightning fast answers.<br/>
    Through this multi-month extravaganza, a ton of people discovered how much fun quizzing could be. In the end, that's what it was all about, encapsulating the spirit of Acumen.</p>
    <p>Antah Prerna<br/>In a collaboration with E-Cell for the annual entrepreneurship fest Udgam, Acumen held an all India business quiz with a whopping prize of Rs. 25000 for the winners and cool goodies for audience participants, hosted by Padmanabhan Pillai and Aniruddha Morarka, esteemed quizmasters from Nagpur quizzing circuit.<br/>
    With 1000+ registrations pan India, the quiz consisted of three stages showcasing some of the most competitive quizzing we have ever seen, ending up in a nail biting finale right up until the last question.</p>
    <p><br/>Nihilanth<br/>Nihilanth is an annual inter-IIT-IIM quiz championship that has the country’s top-tier colleges vying for the ultimate quizzing trophy, undeniably the most distinguished event of its kind given that it has the best quizzers from the country’s best institutes pitting their wits against each other. This year was a virtual-hosted tour-de force consisting of 5 quizzes spread over three days in the middle of mid semester exams, which made it all the more exciting and hectic at the same time, juggling pre-exam mugging and mind boggling cracks. We managed to get a respectable thirteenth place out of the forty-three participating institutions, with a lot of lessons learnt and the will to bounce back stronger next year.</p>
    </p>
                </div>
            </div>
            <div className="team-name">
                <div className="alumni-overview">
                    {teams && teams.map((team)=>(
                        <div className="alumni-data" key={team.id}>
                            <div className="alumni-details">
                                <div className="alm-pos">
                                    {team.position}                                </div>
                                <div className="alumni-image">
                                    <img src={team.img.asset.url} className="alumni-img" alt="" />
                                </div>
                                <div className="alm-name">
                                    {team.name}<br/>
                                    {team.branch}
                                </div>      
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Team;