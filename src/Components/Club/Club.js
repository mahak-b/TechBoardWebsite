import { useState,useEffect } from "react";
import "./club.css";
import plus from "../assests/plus.png";
import minus from "../assests/minus.png";
import clubImage from "../assests/club.png";
import arrow from "../assests/arrow.png";
import sanityClient from "../../client";

const Club = () => {
    const [clubs,setClubs]= useState();
    const [expandedClubId, setExpandedClubId] = useState(null);

    useEffect(() => {
        sanityClient
			.fetch(
				`*[_type == "clubs"]{
                    club_name,
                    id,
                    content,
                    img{
                        asset->{
                            _id,
                            url,
                        },
                        alt
                    }
                }`
			)
			.then((data) =>{ setClubs(data);
            console.log(data);})
			.catch(console.error);
       
    
      },[])
    

    const toggleClubDetails = (id) => {
      if (expandedClubId === id) {
        setExpandedClubId(null);
      } else {
        setExpandedClubId(id);
      }
    };
    return ( 
        <div className="club-list">
            <div className="club-header">
                <div className="club-first-line">ACUMEN CODING CLUB</div>
                <div className="club-second-line"> AERO CLUB AUTOMOTIVE CLUB</div>
            </div>
            {clubs&&clubs.map((club)=>(
                <div className="club-name" key={club.id}>
                    <div className="club-preview">
                        {club.club_name}
                        <div className="plus-button">
                            <button className="plus" onClick={()=>toggleClubDetails(club.id)}>
                                {expandedClubId === club.id ? (<img src={minus} alt=" " />):(<img src={plus} alt=" " />)}
                            </button>
                        </div>
                    </div>
                    {expandedClubId === club.id && (<div className="club-overview">
                        <div className="club-data">
                            <p>{club.content}</p>
                        </div>
                        <div className="club-image">
                            <div className="club-blank">
                               <div className="club-visit">
                                    VISIT<br/>WEBSITE.
                                </div>
                                <div className="club-explore-box">
                                    <div className="club-explore">EXPLORE</div>
                                    <button>
                                        <img src={arrow} alt=""/>  
                                    </button>
                                </div>
                            </div>
                            <img src={club.img.asset.url} alt ={clubImage} className="club-img" />
                        </div>
                    </div>)}
                </div>

                ))}
        </div>
     );
}
 
export default Club;