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
    },
    { setCoin: setOneDime, coin: oneDime, src: oneDimeImg },
    { setCoin: setFiveCent, coin: fiveCent, src: fiveCentImg},
    { setCoin: setCent, coin: cent, src: centImg,piece:1 },
  ];
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
      {arrayCents.map((cents) => (
        <div >
          <div className={style.divCount}>
            <div key={cents.coin} className={cents.coin > 0 ? style.count : style.nullCount}>
              ×{cents.coin}
            </div>
          </div>
          
      
          {doubleFunc( <img 
            draggable={true}
            onDragStart={()=>cents.setCoin(cents.coin + 1)}
            onDragEnd={(e)=>dragOverHandler(e)}
             className={style.coin}
             src={cents.src}
            />)}
        </div>
      ))}
    </div>
  );
};
