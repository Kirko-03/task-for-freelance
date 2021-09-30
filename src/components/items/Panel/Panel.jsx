import React from 'react'
import { MyButton } from "../../utils/buttons/Button/MyButton";
const style = require("./Panel.module.css");

export const Panel = React.memo(({setArrayCents,arrayCents,setPanel,finish,setCountFinish,countFinish}) => {


  if(!finish)
  setArrayCents(arrayCents)
  function panelFunc(){
    setPanel(false)
    setCountFinish(countFinish-1)
  }
  return (
    <div className={style.panel}>
    <div >
      <div className={style.exit} onClick={()=>setPanel(false)}>×</div>
      <div className={style.money}>
      {arrayCents.map((cents) => (
        <div>
          <div className={style.divCount}>
            <div className={cents.coin > 0 ? style.count : style.nullCount}>
              ×{cents.coin}
            </div>
          </div>
          <img
          key={cents.src}
            onClick={() => {
              cents.setCoin(cents.coin + 1);
            }}
            className={style.coin}
            src={cents.src}
          />
          
        </div>
      ))}
      </div>
      <MyButton className={style.button} onClick={panelFunc} view={'border'} text='Redo'/>
    </div>
    </div>
  );
});
