import {useState,useEffect} from "react";
import "./Projects.css";
import plus from "../assests/plus.png";
import minus from "../assests/minus.png";
import arrow from "../assests/arrow.png";
import sanityClient from "../../client";

const Projects = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
        sanityClient
			.fetch(
				`*[_type == "projects"]{
                    project_name,
                    id,
                    content,
                    img1{
                        asset->{
                            _id,
                            url,
                        },
                        alt
                    },
                    img2{
                        asset->{
                            _id,
                            url,
                        },
                        alt
                    },
                    img3{
                        asset->{
                            _id,
                            url,
                        },
                        alt
                    }
                }`
			)
			.then((data) =>{ setProjects(data);
            console.log(data);})
			.catch(console.error);
       
    
      },[])

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
            {projects && projects.map((project)=>(
                <div className="project-name" key={project.id}>
                    <div className="project-preview">
                        {project.project_name}
                        <div className="plus-button">
                            <button className="plus" onClick={() => toggleProjectDetails(project.id)}>
                                {expandedProjectId === project.id ? (<img src={minus} alt=" " />):(<img src={plus} alt=" " />)}
                            </button>
                        </div>
                    </div>
                    {expandedProjectId === project.id && (<div className="project-overview">
                        <div className="project-data">
                            <p>{project.content}</p>
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
                            <img src={project.img1.asset.url} className="project-img1" alt=""/>
                            <img src={project.img2.asset.url} className="project-img3" alt=""/>
                            <img src={project.img3.asset.url} className="project-img2" alt=""/>
                            </div>
                        </div>
                </div>)}
            </div>
            ))}
        </div>
     );
}
 
export default Projects;
