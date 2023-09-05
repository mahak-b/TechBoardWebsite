import {useState, useEffect} from  "react";
import "./Events.css";
import plus from "../assests/plus.png";
import minus from "../assests/minus.png";
import clubImage from "../assests/club.png";
import arrow from "../assests/arrow.png";
import sanityClient from "../../client";

const Events = () => {
    const [Events,setEvents]= useState();
    const [expandedEventId, setExpandedEventId] = useState(null);

    const toggleClubDetails = (id) => {
    if (expandedEventId === id) {
        setExpandedEventId(null);
    } 
    else {
        setExpandedEventId(id);
    }
    };

    useEffect(() => {
        sanityClient
			.fetch(
				`*[_type == "events"]{
                    event_name,
                    id,
                    content,
                    link,
                    img{
                        asset->{
                            _id,
                            url,
                        },
                        alt
                    }
                }`
			)
			.then((data) =>{ setEvents(data);
            console.log(data);})
			.catch(console.error);
       
    
      },[])

    return (
        <div>
            <div className="events-header">
                <div className="events-header-firstline">   TECHEVINCE KRITI </div>
                <div className="events-header-secondline">TECHNICHE UDGAM TECHNICHE</div>
            </div>
            {Events&&Events.map((club)=>(
                <div className="club-name" key={club.id}>
                    <div className="club-preview">
                        {club.event_name}
                        <div className="plus-button">
                            <button className="plus" onClick={()=>toggleClubDetails(club.id)}>
                                {expandedEventId === club.id ? (<img src={minus} alt=" " />):(<img src={plus} alt=" " />)}
                            </button>
                        </div>
                    </div>
                    {expandedEventId === club.id && (<div className="club-overview">
                        <div className="club-data">
                            <p>{club.content}</p>
                        </div>
                        <div className="club-image">
                            <div className="club-blank">
                               <div className="club-visit">
                                    VISIT<br/>WEBSITE.
                                </div>
                                <div className="club-explore-box">
                                    <a href={club.link}><div className="club-explore">EXPLORE</div></a>
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
 
export default Events;