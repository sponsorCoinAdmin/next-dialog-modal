'use client'
import  React, { ReactNode, useRef, useEffect, useState} from 'react'
import '../../Styles/modal.css';
import dataList from '../Resources/data/tokenEthList.json';
import Dialog from '../Dialog';

type Props = {
  selectedListElement: (listElement: ListElement) => void,
  onClose:  () => void,
}

type ListElement = {
  ticker: string;
  img: string;
  name: string;
  address: string;
  decimals: number;
}

// Parent component
function DlgLstBtn({ selectedListElement, onClose }: Props) {
  const dialogRef = useRef<null | HTMLDialogElement>(null)

  const getSelectedListElement = (listElement: ListElement) => {
    selectedListElement(listElement);
    alert("Modifying Token Object FROM AgentDlgLstBtn.tsx" + JSON.stringify(listElement,null,2));
  }

  const [dialogName, setDialogName] = useState('Select a Token');
 
  return (
    <>
      <Dialog titleName={dialogName} dataList={dataList} onClose={onClose} getSelectedListElement={getSelectedListElement}/>

      <div className="ModalButton">
        <button
          className="bluBtn"
          onClick={() => {
              const dialog = document.querySelector("#dialogList")
                dialog?.show()
          }}
        >
        Token List
        </button>
      </div>
    </>
  )
}

export default DlgLstBtn
