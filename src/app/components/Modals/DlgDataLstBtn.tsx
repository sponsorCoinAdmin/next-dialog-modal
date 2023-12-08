'use client'
import  React, { ReactNode, useRef, useEffect, useState} from 'react'
import './modal.css';
import Dialog from '../Dialog';

type ListElement = {
  ticker: string; 
  img: string; 
  name: string; 
  address: string; 
  decimals: number; }

type DataList = ListElement[];

type Props = {
  buttonName:     string,
  dialogTitle: any,
  dataList: DataList,
  onClose:  () => void,
  onOk:     () => void,
  children: React.ReactNode,
}

    // Parent component
    function DlgLstBtn({ buttonName, dialogTitle, dataList, onClose, onOk, children }: Props) {
      const dialogRef = useRef<null | HTMLDialogElement>(null)

      const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
    }
    
    const clickOk = () => {
        onOk()
        alert("OK was Clicked")
        closeDialog()
    }
 
    const [dialogName, setDialogName] = useState(dialogTitle);

    //////////////// NEW STUFF
    // create a function that the child component can call
    const updateTitleName = (titleName: any) => {
      setDialogName(titleName);
    }
 
  return (
    
    <>

      <Dialog dialogTitle="Token List" titleName={dialogName} updateTitleName={updateTitleName} dataList={dataList} onClose={onClose} onOk={onOk} >
          <div> Children Go Here </div>
      </Dialog>

      <div className="ModalButton">
        <button
          className="bluBtn"
          onClick={() => {
              const dialog = document.querySelector("#dialogList")
                dialog?.show()
          }}
        >
        {dialogTitle}
        </button>
      </div>
    </>
  )
}

export default DlgLstBtn
