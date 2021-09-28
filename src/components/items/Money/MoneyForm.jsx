import centImg from "../../../assets/images/cent.png";
import fiveCentImg from "../../../assets/images/5cent.png";
import oneDimeImg from "../../../assets/images/10cent.png";
import twentyFiveCentsImg from "../../../assets/images/25cent.png";
import { useState } from "react";

const style = require("./MoneyForm.module.css");
export const MoneyForm = ({clearBoolean}) => {
  const [cent, setCent] = useState(0);
  const [fiveCent, setFiveCent] = useState(0);
  const [oneDime, setOneDime] = useState(0);
  const [twentyFiveCents, setTwentyFiveCents] = useState(0);
  const arrayCents = [
    {setCoin: setTwentyFiveCents, coin: twentyFiveCents,src: twentyFiveCentsImg,},
    { setCoin: setOneDime, coin: oneDime, src: oneDimeImg },
    { setCoin: setFiveCent, coin: fiveCent, src: fiveCentImg },
    { setCoin: setCent, coin: cent, src: centImg },
  ];
  return (
    <div className={style.moneyForm}>
      {arrayCents.map((cents) => (
        <div>
          <div className={style.divCount}>
            <div className={style.count}>×{cents.coin}</div>
          </div>
          <img
            onClick={() => {
              cents.setCoin(cents.coin + 1);
            }}
            className={style.coin}
            src={cents.src}
          ></img>
        </div>
      ))}
    </div>
  );
};
