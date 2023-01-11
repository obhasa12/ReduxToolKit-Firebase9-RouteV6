import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

import { errorSignUp } from "../../redux/authSlice"
import { auth } from "../../firebase/fireBaseCof"
import { db } from "../../firebase/fireBaseCof"

const SignOut = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const { authErrorSignUp } = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if(e.target.id === 'email'){
            setEmail(e.target.value)
        }else if(e.target.id === 'password'){
            setPassword(e.target.value)
        }else if(e.target.id === 'firstName'){
            setFirstName(e.target.value)
        }else if(e.target.id === 'lastName'){
            setLastName(e.target.value)
        }
    }

    const handleSumbit =(e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            return setDoc(doc(db, "users", cred.user.uid),{
                firtsName: firstName,
                lastName: lastName,
                initials: firstName[0] + lastName[0]
            })
        }).then(() => {
            console.log("user created")
            dispatch(errorSignUp(null))
        })
        .catch((err) => {
            dispatch(errorSignUp(err.code))
        })
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
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    <div className="center red-text">
                        {authErrorSignUp && <p>{authErrorSignUp}</p>}
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default SignOut;