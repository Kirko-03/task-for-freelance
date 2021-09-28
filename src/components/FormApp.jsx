import { Jar } from "./items/Jars/Jar";
import { MoneyForm } from "./items/Money/MoneyForm";
import { MyButton } from "./utils/buttons/MyButton";
import { useState } from "react";
import { Panel } from "./items/Panel/Panel";

const style = require("./FormApp.module.css");

export const FormApp = () => {
 
  const [arrayCoins, setArrayCoins] = useState();
  console.log(arrayCoins)
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
  function finishFunc() {
    setFinish(true)
    setCountFinish(countFinish + 1);
    clearBank();
    
  }
  function clearBank() {
    setCent(0);
    setFiveCent(0);
    setOneDime(0);
    setTwentyFiveCents(0);
    setClearBoolean(false);
    setError(false);
  }
  {
    clearBoolean && clearBank();
  }
  return (
    <div className={style.formApp}>
      <h2> Make three different combinations to get $0.56</h2>
      <MoneyForm
        cent={cent}
        finish={finish}
        setArrayCoins={setArrayCoins}
        setCent={setCent}
        fiveCent={fiveCent}
        setFiveCent={setFiveCent}
        oneDime={oneDime}
        setOneDime={setOneDime}
        twentyFiveCents={twentyFiveCents}
        setTwentyFiveCents={setTwentyFiveCents}
      />
      <div className={style.mainJar}>
        {error &&
          ((result > 56 && <p>Перебор</p>) || (result < 56 && <p>Недобор</p>))}
        <Jar view={"mainJar"} />
        {result > 0 && (
          <div className={style.buttons}>
            <div className={style.buttons}>
              <MyButton
                text={"Clear"}
                onClick={() => setClearBoolean(true)}
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
      ):<Panel setFinish={setFinish} setPanel={setPanel} arrayCoins={arrayCoins} />}
    </div>
  );
};
