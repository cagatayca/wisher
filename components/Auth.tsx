import React from 'react'
import firebaseClient from '../firebase/client';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const uiConfig = {
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebaseClient.auth.GoogleAuthProvider.PROVIDER_ID]

};


const Auth = () => {
    return (
        <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseClient.auth()} />
        </div>
    )
}

export default Auth
