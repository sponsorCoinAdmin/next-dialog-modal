import React from 'react'
import styles from '../styles/App.module.css'

type Props = {
    ticker: string;
    img: string;
    name: string;
    address: string;
    decimals: number;
}

function returnListElementData(listElement: Props) {
    alert("Modifying Token Object" + JSON.stringify(listElement,null,2));
}

export default function DataList({dataList} : any) {
// export default function DataList() {
    alert("dataList = " + JSON.stringify(dataList,null,2));
    const tList = dataList?.map((e: Props, i: string | number) => (
        <div
            className={styles.tokenChoice}
            onClick={() => returnListElementData(dataList[i])}
        >
            <img src={e.img} alt={e.ticker} className={styles.tokenLogo} />

            <div className={styles.tokenChoiceNames}>
                {/* {alert("e.name[" +i+ "] = " + e.name)} */}
                <div className={styles.tokenName}>{e.name}</div>
                <div className={styles.tokenTicker}>{e.ticker}</div> 
            </div>
        </div>)
    )
    return (
        <div>
            {tList}
        </div>
    )
}

// export default DataList
