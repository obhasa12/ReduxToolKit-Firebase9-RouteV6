import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "../../redux/authSlice"

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const { authError } = useSelector((state) => state.auth)
    const dispatch = useDispatch()


    const handleChange = (e) => {
        e.target.id === 'email'? setEmail(e.target.value): setPassword(e.target.value)
    }
    const handleSumbit =(e) => {
        e.preventDefault()
        const credetial = [email, password]
        dispatch(signIn(credetial))
        e.target.reset()
    }

    return ( 
        <div className="container">
            <form onSubmit={handleSumbit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
     );
}
 
export default SignIn;