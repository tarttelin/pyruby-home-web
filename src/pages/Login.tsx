import React, {useEffect, useState} from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { GoogleAuthProvider, EmailAuthProvider, getAuth, User } from 'firebase/auth';


const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    }
};

interface SignInPageProps {
    setSignedInUser: (user: User | null) => void;
    user: User | null;
}

const SignInPage: React.FC<SignInPageProps> = ({setSignedInUser, user}) => {
    const auth = getAuth();
    const [token, setToken] = useState("none");
    useEffect(() => {
        const unregisterAuthObserver = getAuth().onAuthStateChanged(async (user) => {
            setSignedInUser(user);
            setToken(await user?.getIdToken() || "none");
        });
    }, []);

    if (user && !user!!.isAnonymous) {
        return (
            <div>
              <h1>My App</h1>
              <p>Welcome {user!!.displayName}! You are now signed-in!</p>
              <p>Auth token: {token}</p>
              <a onClick={() => auth.signOut()}>Sign-out</a>
            </div>);
    } 
    return (
        <div>
            <h1>My app</h1>
            <p>Please sign in:</p>
            <div className="auth-popup">
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </div>
        </div>);
}

export default SignInPage;