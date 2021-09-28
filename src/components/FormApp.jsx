import {Jar} from './items/Jars/Jar'
import {MoneyForm} from './items/Money/MoneyForm'
import {MyButton} from './utils/buttons/MyButton'
import {useState} from 'react'

 const style = require('./FormApp.module.css')

export const FormApp = () => {
let [availabilityOfCoins,setAvailabilityOfCoins] = useState(true) 
let [clearBoolean,setClearBoolean] = useState(false)
  return <div className={style.formApp}>
      <h2> Make three different combinations to get $0.56</h2>
      <MoneyForm clearBoolean={clearBoolean}/>
     <div  className={style.mainJar}>
      <Jar view={'mainJar'} />
      {availabilityOfCoins&&<div className={style.buttons}>
      <MyButton text={'Clear'} onClick={()=>setClearBoolean(true)} view={'underline'}/>
      <MyButton text={'Done'} view={'border'}/>
      </div>}
      </div>
      <div className={style.jars}>
      <Jar view={'jar'}/>
      <Jar view={'jar'}/>
      <Jar view={'jar'}/>
      </div>
      
  </div>;
};
