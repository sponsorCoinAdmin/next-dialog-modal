'use client'
import React from 'react'
import './modal.css';



function DlgDataLstBtn(s) {




  return (
    
    <>
      <div className="ModalButton">
        <button
          className="bluBtn"
          onClick={() => {
              const dialog = document.querySelector("#dialogList")
              dialog?.show()
          }}
        >
         Open Token List Dialog Modal
        </button>
      </div>
    </>
  )
}

export default DlgDataLstBtn
