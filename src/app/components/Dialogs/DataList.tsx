import React from 'react'
import styles from '../styles/App.module.css'
import info_png from './Resources/images/info1.png'
import Image from 'next/image'

type ListElement = {
    ticker: string; 
    img: string; 
    name: string; 
    address: string; 
    decimals: number;
}

type Props = {
    dataList: ListElement[],
    getSelectedListElement:  (listElement: ListElement) => void,
}

function DataList({dataList, getSelectedListElement} : Props) {
    // alert("dataList = " + JSON.stringify(dataList,null,2));
    
    const tList = dataList?.map((e: ListElement, i: number) => (
        <>
            <div className="flex flex-row justify-between mb-1 pt-2 px-5">
                <div className="flex flex-row justify-between">
                    <img src={e.img} alt={e.ticker} className={styles.tokenLogo} />
                    <div className={styles.tokenChoiceNames}>
                        <div className={styles.tokenName}>{e.name}</div>
                        <div className={styles.tokenTicker}>{e.ticker}</div> 
                    </div>
                </div>
                <div className="py-3 cursor-pointer rounded border-none w-8 h-8 text-lg font-bold text-white"  onClick={() => getSelectedListElement(dataList[i])}>
                    <Image src={info_png} className={styles.infoLogo} alt="Info Image" />
                </div>
            </div>

            {/* {alert("e.name[" +i+ "] = " + e.name)} */}
            <div className={styles.tokenChoice}>
                <img src={e.img} alt={e.ticker} className={styles.tokenLogo} />
                <div className={styles.tokenChoiceNames}>
                    <div className={styles.tokenName}>{e.name}</div>
                    <div className={styles.tokenTicker}>{e.ticker}</div> 
                </div>
                <div className={styles.rightH} onClick={() => getSelectedListElement(dataList[i])}>
                    <Image src={info_png} className={styles.infoLogo} alt="Info Image" />
                </div>
            </div>

            {/* <div className={styles.tokenChoice}>
                <img src={e.img} alt={e.ticker} className={styles.tokenLogo} />
                <div className={styles.tokenChoiceNames}>
                    <div className={styles.tokenName}>{e.name}</div>
                    <div className={styles.tokenTicker}>{e.ticker}</div> 
                </div>
                <div className={styles.rightH} onClick={() => getSelectedListElement(dataList[i])}>
                    <Image src={info_png} className={styles.infoLogo} alt="Info Image" />
                </div>
            </div> */}

        </>
        ) 
    )
    return (
        <div>
            {tList}
        </div>
    )
}

export default DataList
