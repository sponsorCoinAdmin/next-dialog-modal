'use client'
import Link from "next/link"
import React from 'react'

const DialogButton = () => {
    return (
        <>
      <Link href="/dialogTests?showDialog=y" className="text-3xl underline">Go to dialogTests with Modal</Link>
      <Link href="/dialogTests" className="text-3xl underline">Go to dialogTests without Modal</Link>

            <button onClick={() => alert("click")} >Token List</button>
        </>
    );
  };
  
  export default DialogButton
  