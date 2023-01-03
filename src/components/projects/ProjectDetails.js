import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProjects } from "../../redux/ProjectSlice";

const ProjectDetails = () => {
    const { id } = useParams();
    const { projects } = useSelector((state) => state.projects)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);
    
    const project = projects.find((project) => project.id === id);
    
    if(project){
        return(
            <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{ project.title }</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis eligendi sunt enim, amet dolorum exercitationem tempora? Asperiores, sit? Nihil quas quisquam quidem? Accusantium, fuga rem explicabo natus nihil aspernatur!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by { project.content }</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
        )
    }else{
        return (
            <div className="cotainer center">
                <p>Loading Project...</p>
            </div>
            );
    }
}
 
export default ProjectDetails;