import React from 'react'
import User from '@/components/User'

type WishProps = {
    wish:string;
    userId:string;
}

const Wish:React.FC <WishProps> = ({wish, userId}) => {
    return (
        <div className="p-3 mb-4 text-white text-lg bg-gray-700 shadow-inner border-8 border-green-900 rounded-md flex items-center" >
            <User id={userId}/>
            <span className="px-3 py-4">{wish}</span>
        </div>
    )
}

export default Wish
