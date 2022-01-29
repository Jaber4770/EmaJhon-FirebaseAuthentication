import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../components/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const SignInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    return {
        user,
        logOut,
        SignInUsingGoogle
    }


}

export default useFirebase;