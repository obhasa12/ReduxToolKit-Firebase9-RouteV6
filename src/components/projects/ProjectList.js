import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({projects}) => {
    return ( 
        <div className="project-list section">
            { projects && projects.map(project => {
                return(
                    <div className="project-list-wrapper" key={project.id}>
                        <Link to={`/project/${project.id}`}>
                            <ProjectSummary project={project} key={project.id}/>
                        </Link>
                    </div>
                )
            })}
        </div>
     );
}
 
export default ProjectList;