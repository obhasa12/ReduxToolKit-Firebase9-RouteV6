import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { auth } from "../../firebase/fireBaseCof";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
    onAuthStateChanged(auth, (user) => {
        // console.log("user states changed: ", user)
    })

    return ( 
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <Link to="/" className="brand-logo">AcenBlog</Link>
            <SignedInLinks />
            <SignedOutLinks />
            </div>
        </nav>
     );
}
 
export default Navbar;