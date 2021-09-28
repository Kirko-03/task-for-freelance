import cent from '../../../../assets/images/cent.png'
import fiveCent from '../../../../assets/images/5cent.png'
import oneDime from '../../../../assets/images/10cent.png'
import twentyFiveCents from '../../../../assets/images/25cent.png'
import { useState } from "react";

const style = require("./Coin.module.css");
export const Coin = ({view}) => {
    let [coin, setCoin] = useState(0);
    return <div>
        {view===cent&&<img onClick={()=>{setCoin(coin+1)}} className={style.coin} src={cent}></img>}
        {view===cent&&<img onClick={()=>{setCoin(coin+1)}} className={style.coin} src={fiveCent}></img>}
        {view===cent&&<img onClick={()=>{setCoin(coin+1)}} className={style.coin} src={oneDime}></img>}
        {view===cent&&<img onClick={()=>{setCoin(coin+1)}} className={style.coin} src={twentyFiveCents}></img>}
    </div>
}