'use client'
import React from 'react'
import './modal.css';

function RecipientDlgLstBtn() {
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
         Open Recipient List Dialog Modal
        </button>
      </div>
    </>
  )
}

export default RecipientDlgLstBtn
