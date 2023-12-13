"use client"
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect, useState, ReactNode } from 'react'
import DataList from './DataList'
// import styles from '../Styles/Modal.module.css';

// import '../Styles/modal.css';
import searchMagGlass_png from './Resources/images/searchMagGlass.png'
import Image from 'next/image'
import InputSelect from './header'

type ListElement = {
    ticker: string; 
    img: string; 
    name: string; 
    address: string; 
    decimals: number;
}

type Props = {
    titleName: any,
    dataList: ListElement[],
    updateTitleName:  (titleName: any) => void,
    onClose:  () => void,
    onOk:     () => void,
    getSelectedListElement: (listElement: DataProps) => void,
    children: React.ReactNode,
}

type DataProps = {
    ticker: string;
    img: string;
    name: string;
    address: string;
    decimals: number;
}

export default function Dialog({ titleName, updateTitleName, dataList, onClose, onOk, getSelectedListElement, children }: Props) {

    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get('showDialog')

    useEffect(() => {
        if (showDialog === 'y') {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [showDialog])

    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
    }

    const clickOk = () => {
        onOk()
        alert("Dialog.tsx: OK was Clicked")
        closeDialog()
    }

    // const dialog: JSX.Element | null = showDialog === 'y'
    //     ? (
    const dialog = (
        // <dialog id="dialogList" ref={dialogRef} className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50">
        <dialog id="dialogList" ref={dialogRef} >
            <div className="modalBox">
                <div className="flex flex-row justify-between mb-1 pt-2 px-5 bg-yellow-400">
                    <h1 className="text-2xl">{titleName}</h1>
                    <button
                        onClick={closeDialog}
                        className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
                    >x</button>
                </div>
                {/* Input */}
                {/* .antInput */}
                <div className="modalInputSelect">
                    <InputSelect />
                </div>

                {/* <div className="px-5 pb-6"> */}
                <div className="ex1">
                {/* <DataList /> */}
                <DataList dataList={dataList } getSelectedListElement={getSelectedListElement}/>
                    {/* {children} */}
                    <div className="flex flex-row justify-end mt-2">
                        <button
                            onClick={clickOk}
                            className="bg-green-500 py-1 px-2 rounded border-none"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    )
    // ) : null
    return dialog
}
