import React from 'react';
import { RiSunFill } from "react-icons/ri";

const Darkmode = () => {
  const [theme,setTheme]=React.useState(
    localStorage.getItem("theme")? localStorage.getItem("theme"):"light"
  );
  const element=document.documentElement;

  React.useEffect(()=>{
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[theme]);
  return (
    <div className='relative'>
      <RiSunFill alt="" onClick={()=>setTheme(theme== "light" ? "dark":"light")} className={"w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" }/>
    </div>
  )
}

export default Darkmode;