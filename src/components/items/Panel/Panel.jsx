import { useState } from "react";
import { MyButton } from "../../utils/buttons/MyButton";
const style = require("./Panel.module.css");

export const Panel = ({arrayCoins,setPanel,finish}) => {
    const [arrayCents,setArrayCents]=useState([])
    if(finish){
        setArrayCents([...arrayCoins])
    }
  return (
    <div className={style.panel}>
    <div >
      <div className={style.exit} onClick={()=>setPanel(false)}   >×</div>
      <div className={style.money}>
      {arrayCents.map((cents) => (
        <div>
          <div className={style.divCount}>
            <div className={cents.coin > 0 ? style.count : style.nullCount}>
              ×{cents.coin}
            </div>
          </div>
          <img
            onClick={() => {
              cents.setCoin(cents.coin + 1);
            }}
            className={style.coin}
            src={cents.src}
          />
          
        </div>
      ))}
      </div>
      <MyButton className={style.button} onClick={()=>setPanel(false)} view={'border'} text='Redo'/>
    </div>
    </div>
  );
};
