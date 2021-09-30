import React from 'react'
const style = require("./MoneyForm.module.css");
export const CoinsComponent = React.memo(({id,oneArray,doubleFunc,dragOverHandler,threeArray,twoArray,fourArray}) =>{
   return <div id={id}>
      {oneArray.map((cents) => (
        <div >
          {doubleFunc( <img 
          alt="coin"
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
          alt="coin"
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
          alt="coin"
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
          alt="coin"
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
})