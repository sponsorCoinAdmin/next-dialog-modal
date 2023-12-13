"use client"
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect, useState, ReactNode } from 'react'
import DataList from './DataList'
import InputSelect from './InputSelect'

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

export default function Dialog({ titleName, updateTitleName, dataList, onClose, getSelectedListElement, children }: Props) {

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

    // const dialog: JSX.Element | null = showDialog === 'y'
    //     ? (
        const dialog = (
            <dialog id="AgentDialogList" ref={dialogRef} >
                <div className="modalContainer">
                    <div className="flex flex-row justify-between mb-1 pt-2 px-5 text-white fg-yellow-400">
                        <h1 className="text-2xl">{titleName}</h1>
                        <button
                            onClick={closeDialog}
                            className="mb-2 py-1 px-15 cursor-pointer rounded border-none w-8 h-8 text-lg font-bold text-white"
                        >X</button>
                    </div>
    
                    <div className="modalBox">
                        <div className="modalInputSelect">
                            <InputSelect />
                        </div>
    
                        {/* <div className="px-5 pb-6"> */}
                        <div className="ex1">
                            <DataList dataList={dataList } getSelectedListElement={getSelectedListElement}/>
                            {/* {children} */}
                        </div>
                    </div>
                </div>
            </dialog>
        )

    return dialog
}
