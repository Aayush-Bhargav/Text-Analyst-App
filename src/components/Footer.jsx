import React from "react";
//footer component to display the copyright details
const Footer=(props)=>{
    const date=new Date();
    const year=date.getFullYear(); //get current year
    return(

           <footer className={`${props.mode==='light'?'light-mode':'dark-mode'}`}><p>Copyright &copy; {year}</p></footer> 
        
    );
};
export default Footer;