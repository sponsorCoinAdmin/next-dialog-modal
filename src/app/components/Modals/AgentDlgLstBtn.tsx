'use client'
import React from 'react'
import './modal.css';

function AgentDlgLstBtn() {
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
         Open Agent List Dialog Modal
        </button>
      </div>
    </>
  )
}

export default AgentDlgLstBtn
