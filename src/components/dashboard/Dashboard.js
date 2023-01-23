import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from "../../redux/ProjectSlice";
import { useEffect } from "react";

const Dashboard = () => {
    const { projects } = useSelector(state => state.projects)
    const { userData } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects());
        console.log(userData)
    }, [dispatch]);
    
    return ( 
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notification />
                </div>
            </div>
        </div>
     );
}

export default Dashboard;