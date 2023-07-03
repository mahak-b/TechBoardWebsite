import { useEffect,useState } from "react";
import plus from "../assests/plus.png";
import minus from "../assests/minus.png";
import arrow from "../assests/arrow.png";
import newsImage from "../assests/news.png";
import sanityClient from "../../client";
import "./news.css";

const News = () => {
    const [news, setNews] = useState();

    useEffect(() => {
        sanityClient
			.fetch(
				`*[_type == "news"]{
                    title,
                    id,
                    date,
                    sdata,
                    ldata,
                    img{
                        asset->{
                            _id,
                            url,
                        },
                        alt
                    }
                }`
			)
			.then((data) =>{ setNews(data)})
			.catch(console.error);
       
    
      },[])

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