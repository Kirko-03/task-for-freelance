import React from 'react'
import { Jar } from "./items/Jars/Jar";
import { MoneyForm } from "./items/Money/MoneyForm";
import { MyButton } from "./utils/buttons/Button/MyButton";
import { useState } from "react";
import { Panel } from "./items/Panel/Panel";

const style = require("./FormApp.module.css");

export const FormApp = React.memo(() => {
  const idArray = [0,1,2]
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
  sessionStorage.setItem('x1',cent)
  sessionStorage.setItem('x2',fiveCent)
  sessionStorage.setItem('x3',oneDime)
  sessionStorage.setItem('x4',twentyFiveCents)
  sessionStorage.setItem('y1',cent)
  sessionStorage.setItem('y2',fiveCent)
  sessionStorage.setItem('y3',oneDime)
  sessionStorage.setItem('y4',twentyFiveCents)
  sessionStorage.setItem('z1',cent)
  sessionStorage.setItem('z2',fiveCent)
  sessionStorage.setItem('z3',oneDime)
  sessionStorage.setItem('z4',twentyFiveCents) 
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
            <Jar id={'3'} view={"moneyJar"} setPanel={setPanel} panel={panel} />
          ) : (
            <Jar   view={"jar"} />
          )}
          {finish  && countFinish >= 2 ? (
            <Jar id={'2'} view={"moneyJar"} setPanel={setPanel} panel={panel}  />
          ) : (
            <Jar   view={"jar"} />
          )}
          {finish && countFinish >= 1 ? (
            <Jar id={'1'} view={"moneyJar"}  setPanel={setPanel} panel={panel} />
          ) : (
            <Jar   view={"jar"} />
          )}
        </div>
      ):<Panel  setPanel={setPanel}  twentyFiveCents={twentyFiveCents}
      oneDime={oneDime}
      fiveCent={fiveCent}
      setCent={setCent}
setFiveCent={setFiveCent}
setOneDime={setOneDime}
setTwentyFiveCents={setTwentyFiveCents}
      cent={cent} countFinish={countFinish} finish={finish} setCountFinish={setCountFinish}  />}
    </div>
  );
});
