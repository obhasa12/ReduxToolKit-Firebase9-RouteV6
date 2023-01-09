import { useNavigate, NavLink } from "react-router-dom";
import { signOutAction } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const SignedInLinks = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(signOutAction())
    }

    return ( 
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={ handleClick }>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">AB</NavLink></li> 
        </ul>
     );
}
 
export default SignedInLinks;