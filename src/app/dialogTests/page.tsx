import Link from "next/link"
import AgentDlgLstBtn from '../components/Dialogs/Buttons/AgentDlgLstBtn'
import RecipientDlgLstBtn from '../components/Dialogs/Buttons/RecipientDlgLstBtn'
import DlgDataLstBtn from '../components/Dialogs/Buttons/DlgDataLstBtn'
import tokenList from '../components/Dialogs/Resources/data/tokenEthList.json';

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
        
       <Link href="/" className="text-3xl underline">Go to Home</Link>

        <AgentDlgLstBtn buttonName="Open Agent List Dialog" dialogTitle='Agent List Header' dataList={tokenList} onClose={onClose} onOk={onOk} >
            <div> Children Go Here </div>
        </AgentDlgLstBtn>

        <RecipientDlgLstBtn buttonName="Open Recipient List Dialog" dialogTitle='Recipient List Header' dataList={tokenList} onClose={onClose} onOk={onOk} >
            <div> Children Go Here </div>
        </RecipientDlgLstBtn>

        <DlgDataLstBtn buttonName=" Open List Dialog" dialogTitle='Token List Header' dataList={tokenList} onClose={onClose} onOk={onOk} >
            <div> Children Go Here </div>
        </DlgDataLstBtn>

    </>
    )
}