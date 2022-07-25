import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
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
      <img src="https://i.imgur.com/THeVLo6.jpg" onClick={toggleModal} className="btn-modal" style={{width:200,height:100,position:"absolute",top:280,left:180, boxShadow:" 0 4px 8px 0 rgba(150, 13, 13, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            
            <img src="https://i.imgur.com/THeVLo6.jpg" style={{width:320,height:220}}/>
            
           
          </div>
        </div>
      )}
      
     
    </>
  );
}