import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    // const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

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
        createUser,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;