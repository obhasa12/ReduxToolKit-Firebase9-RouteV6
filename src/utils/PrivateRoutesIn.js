import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/fireBaseCof";

const PrivateRoutesIn = () => {
    const[user, setUser] = useState(true)

    onAuthStateChanged(auth, (user) => {
        user? setUser(true): setUser(false)
    })

    return (
        user? <Outlet/>: <Navigate to="/signin"/>
     );
}
 
export default PrivateRoutesIn;