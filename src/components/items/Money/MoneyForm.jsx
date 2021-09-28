import centImg from "../../../assets/images/cent.png";
import fiveCentImg from "../../../assets/images/5cent.png";
import oneDimeImg from "../../../assets/images/10cent.png";
import twentyFiveCentsImg from "../../../assets/images/25cent.png";

const style = require("./MoneyForm.module.css");
export const MoneyForm = ({
  cent,
  setCent,
  fiveCent,
  setFiveCent,
  oneDime,
  setOneDime,
  twentyFiveCents,
  setTwentyFiveCents,
}) => {
 const arrayCents = [
    {
      setCoin: setTwentyFiveCents,
      coin: twentyFiveCents,
      src: twentyFiveCentsImg,
    },
    { setCoin: setOneDime, coin: oneDime, src: oneDimeImg },
    { setCoin: setFiveCent, coin: fiveCent, src: fiveCentImg },
    { setCoin: setCent, coin: cent, src: centImg },
  ];
  return (
    <div className={style.moneyForm}>
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
  );
};
