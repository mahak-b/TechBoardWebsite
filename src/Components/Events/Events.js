import {useState, useEffect} from  "react";
import "./Events.css";

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

    return (
        <div>
            <div className="events-header">
                <div className="events-header-firstline">   TECHEVINCE KRITI </div>
                <div className="events-header-secondline">TECHNICHE UDGAM TECHNICHE</div>
            </div>
            
        </div>
     );
}
 
export default Events;