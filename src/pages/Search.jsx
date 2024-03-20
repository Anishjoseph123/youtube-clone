import React, { useContext } from 'react'
import {FaSearch,FaMicrophone} from "react-icons/fa"
import { useState } from 'react';
import { videoContext } from '../apis/VideoContext';

const Search = () => {
    let [state,setState]=useState("");
    let {searchTerm}=useContext(videoContext);

    let handleSubmit=e=>{
        e.preventDefault();
        try{

            setState(searchTerm(state))
            setState("")
        
            
 }catch(error) {
            console.log(error);
        }
    }

  return (
    <div className="basis-[50%] ">

       <form className="flex items-center" onSubmit={handleSubmit}>
       <span  className="basis-[80%]">
            <input type="text" placeholder='Search' className="border-2 shadow-sm p-2 w-[100%]"
             value={state} onChange={(e)=>setState(e.target.value)} />

        </span>

        <span className="w-[10%] text-center bg-gray-100 border-2">
            <button className="bg-gray-100 text-2xl p-2">
                <FaSearch/>
            </button>

        </span>

        <span className="w-[10%] text-center justify-center flex">
            <button className="w-[60%] bg-gray-100 text-center p-3 rounded-full">
                <FaMicrophone/>
            </button>
        </span>



       </form>



    </div>
  )
}

export default Search