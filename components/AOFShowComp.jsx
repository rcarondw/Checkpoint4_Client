import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AOFChange } from '../src/actions';


export default function AOFShowComp() {
    const dispatch = useDispatch()

    const AOFPic = useSelector(state => state.AOFPic)
    
    return(
        <div className="w-full h-screen flex justify-center items-center relative" onClick={() => dispatch(AOFChange())}  >
            <img src={AOFPic} width="500px" height="400px" />
        </div>
    )
};
