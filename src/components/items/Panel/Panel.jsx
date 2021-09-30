import React from 'react'
import centImg from "../../../assets/images/cent.png";
import fiveCentImg from "../../../assets/images/5cent.png";
import oneDimeImg from "../../../assets/images/10cent.png";
import twentyFiveCentsImg from "../../../assets/images/25cent.png";

import { MyButton } from "../../utils/buttons/Button/MyButton";
const style = require("./Panel.module.css");

export const Panel = React.memo(({setPanel,twentyFiveCents,
  oneDime,
  fiveCent,setCent,
  finish,
  setFiveCent,
  setOneDime,
  setTwentyFiveCents,
  cent,setCountFinish,countFinish}) => {
    
  const arrayCents = [
    {
      setCoin: setTwentyFiveCents,
      coin: twentyFiveCents,
      src: twentyFiveCentsImg,
    },
    { setCoin: setOneDime, coin: oneDime, src: oneDimeImg },
    { setCoin: setFiveCent, coin: fiveCent, src: fiveCentImg },
    { setCoin: setCent, coin: cent, src: centImg },
  ]
  function panelFunc(){
    setPanel(false)
    setCountFinish(countFinish-1)
 
  }

  if(countFinish===1&&finish){
    setOneDime(  sessionStorage.getItem('x3'))
    setFiveCent(  sessionStorage.getItem('x2'))
    setCent(sessionStorage.getItem('x1'))
    setTwentyFiveCents(  sessionStorage.getItem('x4'))
  }
  else if(countFinish===2&&finish){
    setOneDime(sessionStorage.getItem('y3'))
    setFiveCent(sessionStorage.getItem('y2'))
    setCent(sessionStorage.getItem('y1'))
    setTwentyFiveCents(  sessionStorage.getItem('y4'))
  }
  else if(countFinish===3&&finish){
    setOneDime(sessionStorage.getItem('z3'))
    setFiveCent(sessionStorage.getItem('z2'))
    setCent(sessionStorage.getItem('z1'))
    setTwentyFiveCents(sessionStorage.getItem('z4'))
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
          alt={'coin'}
          key={cents.src}
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
