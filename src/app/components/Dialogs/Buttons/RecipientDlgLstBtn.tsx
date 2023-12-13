'use client'
import  React, { ReactNode, useRef, useEffect, useState} from 'react'
import '../../Styles/Modal.module.css';
import dataList from '../Resources/data/tokenEthList.json';
import Dialog from '../RecipientDlgLst';

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
  children: React.ReactNode,
}

type DataProps = {
  ticker: string;
  img: string;
  name: string;
  address: string;
  decimals: number;
}

// Parent component
function DlgLstBtn({ onClose, children }: Props) {
  const dialogRef = useRef<null | HTMLDialogElement>(null)

  const closeDialog = () => {
    dialogRef.current?.close()
    onClose()
}

  const getSelectedListElement = (listElement: DataProps) => {
    alert("Modifying Token Object FROM AgentDlgLstBtn.tsx" + JSON.stringify(listElement,null,2));
  }

  const [dialogName, setDialogName] = useState('Sponsor a Recipient');
  
  return (
    <>
      <Dialog 
        titleName={dialogName} 
        dataList={dataList} 
        onClose={onClose} 
        getSelectedListElement={getSelectedListElement}
      >
          <div> Children Go Here </div>
      </Dialog>

      <div className="ModalButton">
        <button
          className="bluBtn"
          onClick={() => {
              const dialog = document.querySelector("#RecipientDialogList")
                dialog?.show()
          }}
        >
        Recipient List
        </button>
      </div>
    </>
  )
}

export default DlgLstBtn
