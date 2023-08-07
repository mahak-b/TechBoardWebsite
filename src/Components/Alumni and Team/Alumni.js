import { useEffect,useState } from "react";
import plus from "../assests/plus.png";
import minus from "../assests/minus.png";
import alumniImage from "../assests/alumni.png";
import "./alumni.css";
// import Team from "./Team.js";

const Alumni = () => {
    const [periods,setPeriods]=useState([{"year":2022,"id":1},{"year":2021,"id":2},{"year":2020,"id":3}]);
    const[alumnis,setAlumnis]=useState(null);
    const [error,setError]=useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/alumni')
            .then(res=>{
                console.log(res);
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data=>{
                console.log(data);
                setAlumnis(data);
                setError(null);
            })
            .catch(err=>{
                setError(err.message);  
            })
      }, []);
      const [expandedClubId, setExpandedClubId] = useState(null);

      const toggleClubDetails = (id) => {
        if (expandedClubId === id) {
          setExpandedClubId(null);
        } else {
          setExpandedClubId(id);
        }
      };
      const filterAlumniByYear = (year) => {
        return alumnis && alumnis.filter((alumni) => alumni.year === year);
      };
    return ( 
        <div className="alumni-list">
            {periods.map((period)=>(
                <div className="club-name" key={period.id}>
                    <div className="club-preview">
                        ALUMNI {period.year}
                        <div className="plus-button">
                            <button className="plus" onClick={()=>toggleClubDetails(period.id)}>
                                {expandedClubId === period.id ? (<img src={minus} alt=" " />):(<img src={plus} alt=" " />)}
                            </button>
                        </div>
                    </div>
                    {expandedClubId === period.id && error && <div>{error}</div>}
                    {expandedClubId === period.id && alumnis && 
                    (<div className="alumni-overview">
                        {filterAlumniByYear(period.year).map((alumni) => (
                            <div className="alumni-data" key={alumni.id}>
                                <div className="alumni-details">
                                    <div className="alm-pos">
                                        {alumni.position}
                                        <sup className="alm-year">{alumni.year}</sup>
                                    </div>
                                    <div className="alumni-image">
                                        <img src={alumniImage} className="alumni-img" alt="" />
                                    </div>
                                    <div className="alm-name">
                                        {alumni.name}<br/>
                                        {alumni.branch}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>)}
                </div>
                ))}
        </div>

     );
}
 
export default Alumni;