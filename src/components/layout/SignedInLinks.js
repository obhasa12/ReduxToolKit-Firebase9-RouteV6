import { useNavigate, NavLink } from "react-router-dom";
import auth from "../../firebase/fireBaseCof"
// import { signOut } from "firebase/auth";
import { signOutAction } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const SignedInLinks = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        // signOut(auth)
        dispatch(signOutAction())
        navigate("/")
        // console.log(auth)
            // .then(() => {
            //     console.log("the user signed out")
            // })
            // .catch((err) => {
            //     console.log(err.message)
            // })
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