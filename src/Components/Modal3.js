import React, { useState } from "react";
import "./Modal.css";

export default function Modal3() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <img src="https://images.unsplash.com/photo-1542351567-cd7b06dc08d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" onClick={toggleModal} className="btn-modal" style={{width:200,height:100,position:"absolute",top:280,left:1080, boxShadow:" 0 4px 8px 0 rgba(150, 13, 13, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            
            <img src="https://images.unsplash.com/photo-1542351567-cd7b06dc08d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" style={{width:320,height:220}}/>
            
           
          </div>
        </div>
      )}
      
     
    </>
  );
}