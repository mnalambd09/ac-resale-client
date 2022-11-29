import React, { createContext, useState } from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    // const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = {
        user,
        signIn,
        loginWithGoogle,
        logInWithGithub,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;