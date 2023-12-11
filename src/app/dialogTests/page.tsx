import Link from "next/link"
import AgentDlgLstBtn from '../components/Dialogs/Buttons/AgentDlgLstBtn'
import RecipientDlgLstBtn from '../components/Dialogs/Buttons/RecipientDlgLstBtn'
import DlgDataLstBtn from '../components/Dialogs/Buttons/DlgDataLstBtn'

export default function Products() {

    async function onClose() {
        "use server"
        console.log("Modal has closed")
    }

    async function onOk() {
        "use server"
        console.log("Ok was clicked")
    }

    return (
    <>
        <h1 className="text-5xl">Dialog Test</h1>

        <AgentDlgLstBtn onClose={onClose} onOk={onOk} >
            <div> Children Go Here </div>
        </AgentDlgLstBtn>

        <RecipientDlgLstBtn onClose={onClose} onOk={onOk} >
            <div> Children Go Here </div>
        </RecipientDlgLstBtn>

        <DlgDataLstBtn onClose={onClose} onOk={onOk} >
            <div> Children Go Here </div>
        </DlgDataLstBtn>

        <Link href="/" className="text-3xl underline">Go to Home</Link>

    </>
    )
}