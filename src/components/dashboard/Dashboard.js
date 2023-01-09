import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from "../../redux/ProjectSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/fireBaseCof";

const Dashboard = () => {
    const { projects } = useSelector(state => state.projects)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProjects());
        onAuthStateChanged(auth, (user) => {
            if(!user){
                navigate("/signin")
            }
        })
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