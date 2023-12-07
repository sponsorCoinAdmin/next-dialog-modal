import Link from "next/link"
import Dialog from "../components/Dialog"
import TokenListDialog from "../components/Modals/TokenListDialog";
import tokenList from "../resources/data/tokenEthList.json";




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

        {/* dialog.showModal() // Opens a modal */}
        
        <h1 className="text-5xl">Dialog Test</h1>
        
        <Dialog title="Token List" dataList={tokenList} onClose={onClose} onOk={onOk} >
            <div> Children Go Here </div>
        </Dialog>

        <Link href="/" className="text-3xl underline">Go to Home</Link>

        <TokenListDialog />

        </>
    )
}