import "./Events.css";

const Events = () => {
    const [expandedClubId, setExpandedClubId] = useState(null);

    const toggleClubDetails = (id) => {
    if (expandedClubId === id) {
        setExpandedClubId(null);
    } 
    else {
        setExpandedClubId(id);
    }
    };
    return (
        <div>
            <div className="events-header">
                <div className="events-header-firstline">   TECHEVINCE KRITI TECH</div>
                <div className="events-header-secondline">TECHNICHE UDGAM TECHNICHE</div>
            </div>
            
        </div>
     );
}
 
export default Events;