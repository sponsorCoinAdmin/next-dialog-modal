import Link from "next/link"
import Dialog from "../components/Dialog"
import AgentDlgLstBtn from "../components/Modals/AgentDlgLstBtn";
import RecipientDlgLstBtn from "../components/Modals/RecipientDlgLstBtn";
import TokenDlgLstBtn from "../components/Modals/TokenDlgLstBtn";
import DlgDataLstBtn from "../components/Modals/DlgDataLstBtn";
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
        
        <h1 className="text-5xl">Dialog Test</h1>
        
        {/* <Dialog title="Token List" dataList={tokenList} onClose={onClose} onOk={onOk} >
            <div> Children Go Here </div>
        </Dialog> */}

        <Link href="/" className="text-3xl underline">Go to Home</Link>

        <AgentDlgLstBtn />
        <RecipientDlgLstBtn />
        <TokenDlgLstBtn />


        {/* <DlgDataLstBtn buttonName={""} titleName={undefined} dataList={[]} updateTitleName={function (titleName: any): void {
                throw new Error("Function not implemented.");
            } } onClose={function (): void {
                throw new Error("Function not implemented.");
            } } onOk={function (): void {
                throw new Error("Function not implemented.");
            } } children={undefined} /> */}


        <DlgDataLstBtn buttonName="Dialog Data List Button" dialogTitle='Token List' dataList={tokenList} onClose={onClose} onOk={onOk} >
            <div> Children Go Here </div>
        </DlgDataLstBtn>
        </>
    )
}