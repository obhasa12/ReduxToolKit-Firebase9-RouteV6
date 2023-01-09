import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { auth } from "../../firebase/fireBaseCof";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { authState } from "../../redux/authSlice"


const Navbar = () => {
    const { authStats } = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    onAuthStateChanged(auth, (user) => {
        if(user){
            dispatch(authState(user.uid))
        }
        // user? dispatch(authState(user.uid)) : ;
    })

    console.log(authStats)
    

    const userStat = authStats? <SignedInLinks />: <SignedOutLinks />
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