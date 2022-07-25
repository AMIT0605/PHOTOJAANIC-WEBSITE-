import React from "react";
import { useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Toggle1.css';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';


const Toggle1=(props)=>
   {
    function sayHello() {
      alert('HELLO');
    }
   
    const[state,setState]=useState(false);
    const toggle=()=>{
        setState(!state);
    }
 
   
    return(
        
        
        <div>
     
      
      <div className="apptoggle1" style={{position:"absolute",top:100}}>
        <button onClick={toggle} className={'toggle--button2 ' + (state ? 'toggle--close2':'')}>
             <p  style={{width:200}} onClick={toggle} className={'toggle--button3 ' + (state ? 'toggle--close3':'')}>
                12" * 12"   | Rs.799
             </p>
        </button>
      </div>
     








        </div>
    );
   }

   export default Toggle1;