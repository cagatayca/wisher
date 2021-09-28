import React, { FC } from 'react'
import {useDocument} from 'react-firebase-hooks/firestore';
import firebaseClient from 'firebase/client';

type UserProps = {
    id: string;
}

const User:FC<UserProps> = ({id}) => {
    const [value , loadig, error] = useDocument(
        firebaseClient.firestore().doc(`users/${id}`)
    )

    if (loadig) return null;

    return (
        <div className="flex space-x-2 items-center">
            <img src={value.data().photoURL}  className="ml-2 w-12 h-12 rounded-full"/>
            <span className="text-sm text-gray-400">{value.data().displayName}</span>
        </div>
    )
}
export default User;