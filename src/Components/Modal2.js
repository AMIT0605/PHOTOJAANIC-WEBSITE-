import React, { useState } from "react";
import "./Modal.css";

export default function Modal2() {
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
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81815c3a-6201-43cf-b9d7-15769e8fd863/dd4bfzr-08fe7dd8-0f89-4ba8-bc41-43c92f7f5de2.png/v1/fill/w_1280,h_720,q_80,strp/alpine_sunset__4096x2302___16_9__by_mitchrandom_dd4bfzr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvODE4MTVjM2EtNjIwMS00M2NmLWI5ZDctMTU3NjllOGZkODYzXC9kZDRiZnpyLTA4ZmU3ZGQ4LTBmODktNGJhOC1iYzQxLTQzYzkyZjdmNWRlMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DTnbSciJjU4iyWfCYQd1asxgEG-lto_gKm1Rj-Ujqaw" onClick={toggleModal} className="btn-modal" style={{width:200,height:100,position:"absolute",top:280,left:780, boxShadow:" 0 4px 8px 0 rgba(150, 13, 13, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81815c3a-6201-43cf-b9d7-15769e8fd863/dd4bfzr-08fe7dd8-0f89-4ba8-bc41-43c92f7f5de2.png/v1/fill/w_1280,h_720,q_80,strp/alpine_sunset__4096x2302___16_9__by_mitchrandom_dd4bfzr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvODE4MTVjM2EtNjIwMS00M2NmLWI5ZDctMTU3NjllOGZkODYzXC9kZDRiZnpyLTA4ZmU3ZGQ4LTBmODktNGJhOC1iYzQxLTQzYzkyZjdmNWRlMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DTnbSciJjU4iyWfCYQd1asxgEG-lto_gKm1Rj-Ujqaw" style={{width:320,height:220}}/>
            
           
          </div>
        </div>
      )}
      
     
    </>
  );
}