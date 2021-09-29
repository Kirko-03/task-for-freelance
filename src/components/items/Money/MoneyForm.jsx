import centImg from "../../../assets/images/cent.png";
import fiveCentImg from "../../../assets/images/5cent.png";
import oneDimeImg from "../../../assets/images/10cent.png";
import twentyFiveCentsImg from "../../../assets/images/25cent.png";
import { useState } from "react";

const style = require("./MoneyForm.module.css");
export const MoneyForm = ({
  cent,
  result,
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
      number:1
    },
    { setCoin: setOneDime, coin: oneDime, src: oneDimeImg,number:2 },
    { setCoin: setFiveCent, coin: fiveCent, src: fiveCentImg,number:3},
    { setCoin: setCent, coin: cent, src: centImg,number:4 },
  ];
  let oneArray = arrayCents.filter(cents=>cents.number===1)
  let twoArray = arrayCents.filter(cents=>cents.number===2)
  let threeArray = arrayCents.filter(cents=>cents.number===3)
  let fourArray = arrayCents.filter(cents=>cents.number===4)
  const [count,setCount] = useState(0)
  const [piece,setPiece] = useState(0)
  const [top,setTop] = useState('190px') 
   let [none,setNone]=useState(false)
   function doubleFunc(tag){
     let array = []
    for(let i=0;i<56;i++){
      array.push(tag) 
    }
  return array
  }
  function dragOverHandler(e){
    if(result!==0){
      setPiece(piece+1)
      
    e.preventDefault()
    e.target.style.position = 'absolute'
    e.target.style.margin='10px'
    e.target.style.top=top
    console.log(Number(e.target.style.top));
    e.target.style.left = (155+piece+piece*10)+'px'
    if(piece===8){
     setCount(count-5)
     console.log(count);
      setTop((Number(e.target.style.top.replace(e.target.style.top,190))-10+count)+'px')
      
      setPiece(0)
    }
    }
  }

  return (
    <div className={style.moneyForm}>
      {oneArray.map((cents) => (
        <div >
          {doubleFunc( <img 
            draggable={true}
            onDragStart={()=>cents.setCoin(cents.coin + 1)}
            onDragEnd={(e)=>dragOverHandler(e)}
             className={style.coin1}
             src={cents.src}
            />)}
             <div className={style.divCount1}>
            <div key={cents.coin} className={cents.coin > 0 ? style.count : style.nullCount}>
              ×{cents.coin}
            </div>
          </div>
        </div>
      ))}
      {twoArray.map((cents) => (
        <div >
          {doubleFunc( <img 
            draggable={true}
            onDragStart={()=>cents.setCoin(cents.coin + 1)}
            onDragEnd={(e)=>dragOverHandler(e)}
             className={style.coin2}
             src={cents.src}
            />)}
              <div className={style.divCount2}>
            <div key={cents.coin} className={cents.coin > 0 ? style.count : style.nullCount}>
              ×{cents.coin}
            </div>
          </div>
        </div>
      ))}
      {threeArray.map((cents) => (
        <div >
          {doubleFunc( <img 
            draggable={true}
            onDragStart={()=>cents.setCoin(cents.coin + 1)}
            onDragEnd={(e)=>dragOverHandler(e)}
             className={style.coin3}
             src={cents.src}
            />)}
             <div className={style.divCount3}>
            <div key={cents.coin} className={cents.coin > 0 ? style.count : style.nullCount}>
              ×{cents.coin}
            </div>
          </div>
        </div>
      ))}
      {fourArray.map((cents) => (
        <div >
          {doubleFunc( <img 
            draggable={true}
            onDragStart={()=>cents.setCoin(cents.coin + 1)}
            onDragEnd={(e)=>dragOverHandler(e)}
             className={style.coin4}
             src={cents.src}
            />)}
              <div className={style.divCount4}>
            <div key={cents.coin} className={cents.coin > 0 ? style.count : style.nullCount}>
              ×{cents.coin}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
