import React from 'react'
import AllOfFame from './AllOfFame'
import Settings from './Settings'

export default function BlockRight() {
    return(
        <div className="w-1/3 h-4/5 bg-homeGray flex flex-col items-center rounded-md mt-14">
            <h1 className=" text-white text-2xl py-4 font-bold ">Settings</h1>
            <div>
                <Settings />
            </div>
            <div className="w-full h-1/2 flex justify-center items-center">
                <AllOfFame />
            </div>
        </div>
    )
};
