import { createContext, useState, useEffect } from "react"
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/Firebase";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // authProviders
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider()

    // google sing in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

    // github sign in
    const gitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubAuthProvider)
    }


    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // sign out
    const logOut = () => {
        return signOut(auth)
    }


    // observe account
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    const info = {
        user,
        loading,
        googleSignIn,
        logOut,
        createUser,
        logIn, 
        gitHubSignIn
    }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};


export default AuthProvider;