'use client'
import  React, { ReactNode, useRef, useEffect, useState} from 'react'
import '../../Styles/modal.css';
import dataList from '../Resources/data/tokenEthList.json';
import Dialog from '../AgentDlgLst';

type ListElement = {
  ticker: string; 
  img: string; 
  name: string; 
  address: string; 
  decimals: number; 
}

type DataList = ListElement[];

type Props = {
  onClose:  () => void,
  onOk:     () => void,
  children: React.ReactNode,
}

    // Parent component
  function DlgLstBtn({ onClose, onOk, children }: Props) {
    const dialogRef = useRef<null | HTMLDialogElement>(null)

    const closeDialog = () => {
      dialogRef.current?.close()
      onClose()
    }
    
    const clickOk = () => {
        onOk()
        alert("AgentDlgLstBtn.Txt: OK was Clicked")
        closeDialog()
    }
 
    const [dialogName, setDialogName] = useState('Agent List Header');
    const dialogTitle = 'Agent List Header';

    //////////////// NEW STUFF
    // create a function that the child component can call
    const updateTitleName = (titleName: any) => {
      setDialogName(titleName);
    }
 
  return (
    
    <>
      <Dialog titleName={dialogTitle} updateTitleName={updateTitleName} dataList={dataList} onClose={onClose} onOk={clickOk} >
          <div> Children Go Here </div>
      </Dialog>

      <div className="ModalButton">
        <button
          className="bluBtn"
          onClick={() => {
              const dialog = document.querySelector("#AgentDialogList")
              dialog?.show()
          }}
        >
          Agent List
        </button>
      </div>
    </>
  )
}

export default DlgLstBtn
