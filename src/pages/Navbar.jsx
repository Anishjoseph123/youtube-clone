import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'

const Navbar = () => {
  return (
   
       <section className="bg-white h-[70px] shadow-sm w-full absolute">
           <article className="items-center w-[95%] m-auto h-[70px] flex ">
           
       
        <Logo/>
        <Search/>
        <Menu/>


           </article>
       </section>
    
  )
}

export default Navbar