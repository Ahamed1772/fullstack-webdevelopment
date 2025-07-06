import { useState } from "react";
import { auth,GoogleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup,signOut } from "firebase/auth";

export const Auth = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    console.log(auth?.currentUser?.email);
    const signin = async() => {
        try {
            await createUserWithEmailAndPassword(auth,email,password);
        } catch (error) {
            console.log(error)
        }
    }
    const signingoogle = async() => {
        try {
            await signInWithPopup(auth, GoogleProvider)
        } catch (error) {
            console.log(error)
        }
    }
    const logout = async() => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signin}>sign in</button>
            <button onClick={signingoogle}>Sign in with Google</button>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}