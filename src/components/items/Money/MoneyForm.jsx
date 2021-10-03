import centImg from "../../../assets/images/cent.png";
import fiveCentImg from "../../../assets/images/5cent.png";
import oneDimeImg from "../../../assets/images/10cent.png";
import twentyFiveCentsImg from "../../../assets/images/25cent.png";
import { useState } from "react";
import { CoinsComponent } from "./CoinsComponent";
import React from 'react'
const style = require("./MoneyForm.module.css");
export const MoneyForm = React.memo(({
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

   function doubleFunc(tag){
     let array = []
    for(let i=0;i<50;i++){
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
    e.target.style.left = (160+piece+piece*10)+'px'
    if(piece===8){
     setCount(count-5)
    
      setTop((Number(e.target.style.top.replace(e.target.style.top,190))-10+count)+'px')
      
      setPiece(0)
    }
    }
  }
  return (
  
  <div  className={style.moneyForm}>
      <CoinsComponent id={'money30'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money29'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money28'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money27'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money26'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money25'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money24'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money23'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money22'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money21'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
  <CoinsComponent id={'money20'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money19'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money18'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money17'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money16'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money15'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money14'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money13'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money12'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money11'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
  <CoinsComponent id={'money10'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money9'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money8'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money7'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money6'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money5'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money4'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money3'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money2'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
   <CoinsComponent id={'money1'} oneArray={oneArray} doubleFunc={doubleFunc} threeArray={threeArray} twoArray={twoArray} fourArray={fourArray} dragOverHandler={dragOverHandler} />
  </div>
  );
});
