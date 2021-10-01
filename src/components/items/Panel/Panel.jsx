import React from 'react'
import centImg from "../../../assets/images/cent.png";
import fiveCentImg from "../../../assets/images/5cent.png";
import oneDimeImg from "../../../assets/images/10cent.png";
import twentyFiveCentsImg from "../../../assets/images/25cent.png";

import { MyButton } from "../../utils/buttons/Button/MyButton";
const style = require("./Panel.module.css");

export const Panel = React.memo(({setPanel,twentyFiveCents,
  oneDime,
  countId,
  clearBox,
  fiveCent,setCent,
  finish,
  setFiveCent,
  setOneDime,
  setTwentyFiveCents,
  cent,setCountFinish,countFinish}) => {
    
  let arrayCents = [
    {
      setCoin: setTwentyFiveCents,
      coin: twentyFiveCents,
      src: twentyFiveCentsImg,
    },
    { setCoin: setOneDime, coin: oneDime, src: oneDimeImg },
    { setCoin: setFiveCent, coin: fiveCent, src: fiveCentImg },
    { setCoin: setCent, coin: cent, src: centImg },
  ]

  let arrayCents1;
  let arrayCents2;
  let arrayCents3;
  function panelFunc(){
    setPanel(false)
    clearBox('money'+countId)
    setCountFinish(countFinish-1)
  }
  function exitFunc(){
    clearBox('money'+countId)
    setPanel(false)
  }
  if(countFinish===1&&finish){
    setOneDime(sessionStorage.getItem('x3'))
    setFiveCent(sessionStorage.getItem('x2'))
    setCent(sessionStorage.getItem('x1'))
    setTwentyFiveCents(  sessionStorage.getItem('x4'))
  }
  else if(countFinish===2&&finish){

      setOneDime(sessionStorage.getItem('y3'))
    setFiveCent(sessionStorage.getItem('y2'))
    setCent(sessionStorage.getItem('y1'))
    setTwentyFiveCents(sessionStorage.getItem('y4'))

   
  }
  else if(countFinish===3&&finish){
     
     setOneDime(sessionStorage.getItem('z3'))
     setFiveCent(sessionStorage.getItem('z2'))
     setCent(sessionStorage.getItem('z1'))
     setTwentyFiveCents(sessionStorage.getItem('z4'))
    
   
  }
  console.log(arrayCents1);
  console.log(arrayCents2);
  console.log(arrayCents3);
  return (
    <div className={style.panel}>
    <div >
      <div className={style.exit} onClick={()=>exitFunc()}>×</div>
      <div className={style.money} >
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
