import Link from "next/link"
import Dialog from "../components/Dialog"
import DialogButton from "../components/DialogButton"
import TokenListDialog from "../components/Modals/TokenListDialog";



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
        
        <h1> Dialog Test</h1>
        
        <button data-open-modal>Open Dialog</button>
        <DialogButton />

        <Dialog title="Token List" onClose={onClose} onOk={onOk}>
            <div> Children Go Here </div>
        </Dialog>

        <h1 className="text-5xl">Home</h1>

        <Link href="/" className="text-3xl underline">Go to Home</Link>

        <section className="text-2xl flex flex-col gap-4 p-4">
            <p>dialog Test Page</p>
        </section>

{/* ----------------------------------------------------------------------------- */}

 

        <TokenListDialog  />

        </>
    )
}