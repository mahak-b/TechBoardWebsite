import { useEffect,useState } from "react";
import plus from "../assests/plus.png";
import minus from "../assests/minus.png";
import arrow from "../assests/arrow.png";
import newsImage from "../assests/news.png";
import "./news.css";

const News = () => {
    const [news, setNews] = useState(null);
    const [error,setError]=useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/news')
            .then(res=>{
                console.log(res);
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data=>{
                console.log(data);
                setNews(data);
                setError(null);
            })
            .catch(err=>{
                setError(err.message);  
            })
      }, []);
      const [expandedClubId, setExpandedClubId] = useState(null);
    //   const[imgstyle,setImgStyle]=useState("new-img");
      const toggleClubDetails = (id) => {
        if (expandedClubId === id) {
            setExpandedClubId(null);
            // setImgStyle("news-img");
        } else {
            setExpandedClubId(id);
            // setImgStyle("news-img-active");
        }
      };
    return ( 
        <div className="news-list">
            <div className="news-header">
                <div className="news-line">NEWS  NEWS  NEWS  NEWS</div>
            </div>
            {error && <div>{error}</div>}
            {news && news.map((item)=>
            <div className="club-name" key={item.id}>
                <div className="news-preview">
                    <div className="news-box">
                        <div className="news-image">
                            {expandedClubId===item.id && <div className="news-blank">
                                <div className="news-visit">
                                        VISIT<br/>WEBSITE.
                                    </div>
                                    <div className="news-explore-box">
                                        <div className="news-explore">EXPLORE</div>
                                        <button>
                                            <img src={arrow} alt=""/>  
                                        </button>
                                        </div>
                                </div>}
                            {expandedClubId!==item.id?(<img src={newsImage} className="news-img" alt="" />):(<img src={newsImage} className="news-img-active" alt="" />)}
                        </div>
                        <div className="news-details">
                            {expandedClubId !== item.id && <div className="news-date">{item.date}</div>}
                            <div className="news-title">{item.title}</div>
                            {expandedClubId !== item.id ? (<div className="news-sdata">{item.sdata}</div>):(<div className="news-ldata">{item.ldata}</div>)}
                        </div>
                    </div>
                    <div className="plus-button">
                        <button className="plus" onClick={()=>toggleClubDetails(item.id)}>
                            {expandedClubId !== item.id ? (<img src={plus} alt=" " />):(<img src={minus} alt=" " />)}
                        </button>
                    </div>
                    
                </div>
            </div>
            )}
        </div>
     );

}
 
export default News;