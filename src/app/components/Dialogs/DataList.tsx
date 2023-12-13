import React from 'react'
import styles from '../styles/App.module.css'

type DataProps = {
    ticker: string;
    img: string;
    name: string;
    address: string;
    decimals: number;
}

type ListElement = {
    ticker: string; 
    img: string; 
    name: string; 
    address: string; 
    decimals: number;
}

type Props = {
    dataList: ListElement[],
    getSelectedListElement:  (listElement: DataProps) => void,
}

export default function DataList({dataList, getSelectedListElement} : Props) {
    // alert("dataList = " + JSON.stringify(dataList,null,2));
    
    const tList = dataList?.map((e: ListElement, i: number) => (
        <div
            className={styles.tokenChoice}
            onClick={() => getSelectedListElement(dataList[i])}
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
