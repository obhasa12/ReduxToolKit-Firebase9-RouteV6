import { NavLink } from "react-router-dom";
import auth from "../../firebase/fireBaseCof"
import { signOut } from "firebase/auth";

const SignedInLinks = () => {

    const handleClick = () => {
        signOut(auth)
            .then(() => {
                console.log("the user signed out")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    return ( 
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li onClick={ handleClick }><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">AB</NavLink></li> 
        </ul>
     );
}
 
export default SignedInLinks;