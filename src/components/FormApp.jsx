import React,{useMemo} from 'react'
import { Jar } from "./items/Jars/Jar";
import { MoneyForm } from "./items/Money/MoneyForm";
import { MyButton } from "./utils/buttons/Button/MyButton";
import { useState } from "react";
import { Panel } from "./items/Panel/Panel";
import centImg from "../assets/images/cent.png";
import fiveCentImg from "../assets/images/5cent.png";
import oneDimeImg from "../assets/images/10cent.png";
import twentyFiveCentsImg from "../assets/images/25cent.png";

const style = require("./FormApp.module.css");

export const FormApp = React.memo(() => {
  const [countId,setCountId] = useState(1)
  const [panel, setPanel] = useState(false);
  const [cent, setCent] = useState(0);
  const [fiveCent, setFiveCent] = useState(0);
  const [oneDime, setOneDime] = useState(0);
  const [twentyFiveCents, setTwentyFiveCents] = useState(0);
  let result = cent + fiveCent * 5 + oneDime * 10 + twentyFiveCents * 25;
  let [countFinish, setCountFinish] = useState(0);
  let [finish, setFinish] = useState(false);
  let [clearBoolean, setClearBoolean] = useState(false);
  let [error, setError] = useState(false);
  const [arrayCents,setArrayCents] = useState([
    {
      setCoin: setTwentyFiveCents,
      coin: twentyFiveCents,
      src: twentyFiveCentsImg,
    },
    { setCoin: setOneDime, coin: oneDime, src: oneDimeImg },
    { setCoin: setFiveCent, coin: fiveCent, src: fiveCentImg },
    { setCoin: setCent, coin: cent, src: centImg },
  ])
  function clearBank() {
    setCent(0);
    setFiveCent(0);
    setOneDime(0);
    setTwentyFiveCents(0);
    setClearBoolean(false);
    setError(false);
    console.log(countId);
    setCountId(countId+1)
  }
  {
    clearBoolean && clearBank();
  }
  function clearBox(elementID)
{ 
  clearBank()
    document.getElementById(elementID).innerHTML = "";
}
const  finishFunc=()=> {
  setFinish(true)
  setCountFinish(countFinish + 1);
  setCountId(countId+1)
  clearBox('money'+countId)
}
  return (
    <div className={style.formApp}>
      <h2> Make three different combinations to get $0.56</h2>
      <MoneyForm
      countId={countId}
      result={result}
        cent={cent}
        finish={finish}
        setCent={setCent}
        fiveCent={fiveCent}
        setFiveCent={setFiveCent}
        oneDime={oneDime}
        setOneDime={setOneDime}
        twentyFiveCents={twentyFiveCents}
        setTwentyFiveCents={setTwentyFiveCents}
      />
      <div className={style.mainJar}>
        {/* {error &&
          ((result > 56 && <p>Перебор</p>) || (result < 56 && <p>Недобор</p>))} */}
         {/* {result==0&&<img className={style.phone} src={White}/>} */}
        <Jar view={"mainJar"} />
        
        {result > 0 && (
          <div className={style.buttons}>
            <div className={style.buttons}>
              <MyButton
                text={"Clear"}
                onClick={() => clearBox('money'+(countId))}
                view={"underline"}
              />
              <MyButton
                text={"Done"}
                onClick={result !== 56 ? () => setError(true) : finishFunc}
                view={"border"}
              />
            </div>
          </div>
          
        )}
      </div>
      
      {!panel ? 
         (
        <div className={style.jars}>
          {finish && countFinish >= 3 ? (
            <Jar view={"moneyJar"} setPanel={setPanel} panel={panel} />
          ) : (
            <Jar  view={"jar"} />
          )}
          {finish  && countFinish >= 2 ? (
            <Jar view={"moneyJar"} setPanel={setPanel} panel={panel}  />
          ) : (
            <Jar view={"jar"} />
          )}
          {finish && countFinish >= 1 ? (
            <Jar view={"moneyJar"}  setPanel={setPanel} panel={panel} />
          ) : (
            <Jar view={"jar"} />
          )}
        </div>
      ):<Panel setFinish={setFinish} setPanel={setPanel}countFinish={countFinish} setCountFinish={setCountFinish} arrayCents={arrayCents} setArrayCents={setArrayCents} />}
    </div>
  );
});
