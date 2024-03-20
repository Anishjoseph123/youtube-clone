import React,{useState} from "react";
import { FaBars,FaYoutube } from "react-icons/fa";
import VericalBar from "./VericalBar";

const Logo = () => {
  let [vertical,setVertical]=useState(false)
  

  let handleVertical =()=>{
    setVertical(true)
  }

  

return (
    <div className="basis-[30%] flex items-center ">
      <span className="mr-4">

      <button onClick={handleVertical}>
          
          <FaBars />
        
        </button>

        <div>{vertical===false?null:<div>
          <FaBars/>
          <VericalBar/>
          </div>}</div>

       
      


        


      </span>
      <span>
          <FaYoutube className="text-red-700 text-2xl"/>
      </span>
      <span className=" text-2xl">
      YouTube <sup className="text-xs">IN</sup>
      </span>



    </div>
  );
};

export default Logo;
