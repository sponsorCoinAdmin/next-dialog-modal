'use client'
import  React, { ReactNode, useRef, useEffect, useState} from 'react'
import '../../Styles/Modal.module.css';
import dataList from '../Resources/data/tokenEthList.json';
import Dialog from '../RecipientDlgLst';

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

  const [dialogName, setDialogName] = useState('Sponsor a Recipient');
  
  return (
    <>
      <Dialog titleName={dialogName} dataList={dataList} onClose={onClose} selectedListElement={selectedListElement} />

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
