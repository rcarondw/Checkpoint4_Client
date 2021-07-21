import React from 'react'
import Settings from './Settings'

export default function BlockRight() {
    return(
        <div className="w-1/3 h-4/5 bg-gray-900 flex flex-col items-center">
            <h1 className=" text-white text-lg py-4 ">Settings</h1>
            <div>
                <Settings />
            </div>
        </div>
    )
};
