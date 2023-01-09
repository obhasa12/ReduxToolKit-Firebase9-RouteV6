import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutesIn = () => {
const { authStats } = useSelector((state) => state.auth)
// const authStats = true
    return ( 
        authStats? <Outlet/>: <Navigate to="/signin"/>
     );
}
 
export default PrivateRoutesIn;