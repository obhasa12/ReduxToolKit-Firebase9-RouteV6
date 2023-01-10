import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { auth } from "../../firebase/fireBaseCof";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";



const Navbar = () => {
    const[user, setUser] = useState(false)

    onAuthStateChanged(auth, (user) => {
        user? setUser(true): setUser(false)
    })

    

    const userStat = user? <SignedInLinks />: <SignedOutLinks />
    return ( 
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <Link to="/" className="brand-logo">AcenBlog</Link>
            { userStat }
            </div>
        </nav>
     );
}
 
export default Navbar;