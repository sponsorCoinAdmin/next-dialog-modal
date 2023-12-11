"use client"
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect, useState, ReactNode } from 'react'
import DataList from './DataList'

type ListElement = {
    ticker: string; 
    img: string; 
    name: string; 
    address: string; 
    decimals: number; }

type Props = {
    titleName: any,
    dataList: ListElement[],
    updateTitleName:  (titleName: any) => void,
    onClose:  () => void,
    onOk:     () => void,
    children: React.ReactNode,
}

// const [dialogType, setDialogType] = useState("Undefined");

export default function Dialog({ titleName, updateTitleName, dataList, onClose, onOk, children }: Props) {

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
        alert("RecipientDlgLst.tsx: OK was Clicked")
        closeDialog()
    }

    // const dialog: JSX.Element | null = showDialog === 'y'
    //     ? (
            const dialog = (
                <dialog id="RecipientDialogList" ref={dialogRef} className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50">
                <div className="w-[450px] max-w-fullbg-gray-600 flex flex-col">
                    <div className="flex flex-row justify-between mb-1 pt-2 px-5 bg-yellow-400">
                        <h1 className="text-2xl">{titleName}</h1>
                        <button
                            onClick={closeDialog}
                            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
                        >x</button>
                    </div>

                    <div className="w-72">
                        <div className="relative w-full min-w-[450px] h-10">
                            <input
                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                            placeholder=" " /><label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                Search Name or paste Address
                            </label>
                        </div>
                    </div>  

                    {/* <div className="px-5 pb-6"> */}
                    <div className="ex1">
                        <DataList dataList={dataList}/>
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
