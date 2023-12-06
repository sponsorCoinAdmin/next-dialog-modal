'use client'
import React from 'react'

function TokenListDialog() {
  return (
    <>
      <div className="ModalButton">
        <button
          className="tokenList-modal-button2"
          onClick={() => {
              const dialog = document.querySelector("#dialogList")
              dialog.show()
          }}
        >
         OpenDialogueModal
        </button>
      </div>
    </>
  )
}

export default TokenListDialog
