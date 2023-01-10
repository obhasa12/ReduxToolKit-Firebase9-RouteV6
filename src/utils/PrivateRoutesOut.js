import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/fireBaseCof";

const PrivateRoutesOut = () => {
    const[user, setUser] = useState(false)

    onAuthStateChanged(auth, (user) => {
        user? setUser(true): setUser(false)
    })

    return (
        user? <Navigate to="/"/>: <Outlet/>
     );
}
 
export default PrivateRoutesOut;