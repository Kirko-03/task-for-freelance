import React from 'react'
import { Jar } from "../items/Jars/Jar";
import { MoneyForm } from "../items/Money/MoneyForm";
import { MyButton } from "../utils/buttons/Button/MyButton";
import { useState } from "react";
import { Panel } from "../items/Panel/Panel";
import {SubmitPanel} from './SubmitPanel'

const style = require("./FormApp.module.css");

export const FormApp = React.memo(({submit,countId,setCountId}) => {
  const [oneJar,setOneJar] = useState(0)
  const [twoJar,setTwoJar] = useState(0)
  const [threeJar,setThreeJar] = useState(0)
  const [panel, setPanel] = useState(false);
  const [cent, setCent] = useState(0);
  const [fiveCent, setFiveCent] = useState(0);
  const [oneDime, setOneDime] = useState(0);
  const [twentyFiveCents, setTwentyFiveCents] = useState(0);
  let result = cent + fiveCent * 5 + oneDime * 10 + twentyFiveCents * 25;
  let [countFinish, setCountFinish] = useState(0);
  let [finish, setFinish] = useState(false);
  let [clearBoolean, setClearBoolean] = useState(false);
  function clearBank() {
      setCent(0);
    setFiveCent(0);
    setOneDime(0);
    setTwentyFiveCents(0);
    setClearBoolean(false);
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
 if(countFinish===0){
  setOneJar(result)
 }
 if(countFinish===1){
  setTwoJar(result)
}
if(countFinish===2){
  setThreeJar(result)
}
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
      {submit?<SubmitPanel setCountFinish={setCountFinish} setCountId={setCountId} oneJar={oneJar} twoJar={twoJar} threeJar={threeJar} countFinish={countFinish} result={result} finish={finish}/>:<div> 
      <MoneyForm
      clearBox={clearBox}
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
                onClick={finishFunc}
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
            <Jar result={result}   view={"moneyJar"} setPanel={setPanel} panel={panel} />
          ) : (
            <Jar result={result}  view={"jar"} />
          )}
          {finish  && countFinish >= 2? (
            <Jar result={result}  view={"moneyJar"} setPanel={setPanel} panel={panel}  />
          ) : (
            <Jar result={result}  view={"jar"} />
          )}
          {finish && countFinish >= 1 ? (
            <Jar result={result}  view={"moneyJar"}  setPanel={setPanel} panel={panel} />
          ) : (
            <Jar result={result}  view={"jar"} />
          )}
        </div>
      ):<Panel panel={panel} countId={countId} clearBox={clearBox}  setPanel={setPanel}  twentyFiveCents={twentyFiveCents}
      oneDime={oneDime}
      fiveCent={fiveCent}
      setCent={setCent}
setFiveCent={setFiveCent}
setOneDime={setOneDime}
setTwentyFiveCents={setTwentyFiveCents}
      cent={cent} countFinish={countFinish} finish={finish} setCountFinish={setCountFinish}  />}
    </div>}
    </div>
  );
});
