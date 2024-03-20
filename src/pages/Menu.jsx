import React from 'react'
import {BsGrid3X3Gap,BsPersonCircle,BsThreeDotsVertical} from "react-icons/bs"


const Menu = () => {

 
  
  return (
   <div className="basis-[30%] justify-end flex">
     <ul className="flex justify-end space-x-3">
       <li>
         <a href="">
         <BsGrid3X3Gap/>
         </a>
         </li>

         <li>
         <a href="">
         <BsThreeDotsVertical/>
         </a>
         </li>
         <li>
         <button className="flex mt-[-1] pl-2 pr-2 border-2 border-blue-500 text-blue-500  ">
         <span className="pt-1 pr-1"><BsPersonCircle/></span>
         <span>sign in</span>
         </button>
         </li>
     </ul>

   </div>
  )
}

export default Menu