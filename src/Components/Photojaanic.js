import React from "react";
import { useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Photojaanic.css';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';
import Toggle1 from "./Toggle1";
import Modal from "./Modal";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";

const Photojaanic=(props)=>
   {
    function sayHello() {
      alert('HELLO');
    }
   
    const[state,setState]=useState(false);
    const toggle=()=>{
        setState(!state);
    }
    
 
   
    return(
        
        
        <div className="upperbar" style={{width:1550,height:1170,position:"absolute",backgroundColor:"#ffdde1"}}>
        <div style={{backgroundColor:"red",width:2,height:70,position:"absolute",left:207,top:730}}/>
        <div className="upperbar" style={{width:1550,height:70,position:"absolute",backgroundColor:"#fffcdc"}}/>
             <Menu menuButton={<img src="https://cdn-icons-png.flaticon.com/128/7334/7334782.png" style={{width:40,height:40,position:"absolute",top:15,left:10}}/>}>
      <MenuItem style={{width:100,color:"red",backgroundColor:"yellow",borderBottomLeftRadius:5,borderTopLeftRadius:5,borderBottomRightRadius:5,borderTopRightRadius:5}}>Shop</MenuItem>
      <MenuItem style={{width:100,color:"white",backgroundColor:"pink"}}>Offers</MenuItem>
        <MenuItem style={{width:100,color:"red",backgroundColor:"yellow"}}>Projects</MenuItem>
        <MenuItem style={{width:100,color:"white",backgroundColor:"pink",height:25}}>Blogs</MenuItem>
        </Menu>
       <img src="https://c4.wallpaperflare.com/wallpaper/264/666/478/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg" style={{width:320,height:220,position:"absolute",top:133,left:585, boxShadow:" 0 4px 8px 0 rgba(150, 13, 13, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/>
        <p style={{fontWeight:"bold",fontSize:40,fontStyle:"oblique",position:"absolute",color:"#FF416C",left:640,bottom:1070}}>Photojaanic</p>
        <p style={{fontWeight:"bold",fontSize:25,position:"absolute",color:"black",left:680,bottom:1025}}>Canvas Lite</p>
        <Modal/>
        <Modal1/>
        <Modal2/>
        <Modal3/>



        <p  style={{fontSize:20,position:"absolute",top:520,left:200,width:1100}}>Show your passion some love by designing beautiful custom cookbook of your own.Put together your family recipes or a story of your wonderous kitchen experiments.You can choose from a variety of elegant themes and sizes to suit your book just right and make it yours.</p>
       
      <div className="apptoggle" style={{position:"absolute",top:100}}>
        <button onClick={toggle} className={'toggle--button ' + (state ? 'toggle--close':'')}>
             <p  style={{width:200}} onClick={toggle} className={'toggle--button1 ' + (state ? 'toggle--close1':'')}>
                6" * 6"   | Rs.599
             </p>
        </button>
      </div>
      <p style={{fontWeight:"bold",fontSize:25,position:"absolute",color:"black",left:200,bottom:450}}>Size</p>
      <button style={{fontSize:20,width:120,height:45,borderWidth:0,position:"absolute",top:1100,left:680,opacity:1,backgroundColor:"#6dd5ed",borderBottomRightRadius:10,borderBottomLeftRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} onClick={sayHello} className="Box6">Create</button>
      
   
      <Toggle1/>
      <div className="box3" style={{backgroundColor:"black",width:150,height:120,position:"absolute",top:704,left:593,borderTopRightRadius:10,borderBottomLeftRadius:10}}/>

<div className="box2" style={{backgroundColor:"grey",width:143,height:114,position:"absolute",top:710,left:600}}/>
<p style={{fontSize:15,fontWeight:"500",position:"absolute",color:"black",top:780,left:620}}>Square Canvas</p>
<p style={{fontSize:41,fontWeight:"bold",position:"absolute",color:"red",top:900,left:620}}>GET 20% Off</p>
<p style={{fontSize:35,fontWeight:"200",position:"absolute",color:"#979797",top:980,left:620}}>Use Code: FBGC</p>



        </div>
    );
   }

   export default Photojaanic;