import { useNavigate, NavLink } from "react-router-dom";
import { signOutAction } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase/fireBaseCof";
import { useState } from "react";

const SignedInLinks = () => {
    const [userData, setUserData] = useState("")
    const dispatch = useDispatch();

    onAuthStateChanged(auth, (user) => {
        const docRef = doc(db, 'users', user?.uid)
        getDoc(docRef)
        .then((data) => {
            setUserData({...data.data(), id: data.id})
        })
        .catch((err) => console.log(err))
    })

    const handleClick = () => {
        dispatch(signOutAction())
    }

    return ( 
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={ handleClick }>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{userData.initials}</NavLink></li> 
        </ul>
     );
}
 
export default SignedInLinks;