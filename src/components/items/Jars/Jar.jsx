import mainJar from '../../../assets/images/MainJar.png'  
import jar from '../../../assets/images/jar.png'  
import moneyJar from  '../../../assets/images/moneyJar.png'  
import React from 'react'
import { MyButton } from '../../utils/buttons/Button/MyButton'
 const style = require('./Jar.module.css')

export const Jar = React.memo((props) =>{
 return <div>
   {props.view==='mainJar'&&<img alt={'mainJar'} className={style.ActiveMainJar} src={mainJar}/>}
   {props.view==='jar'&&<img alt={'Jar'} className={props.result===0?style.jar:style.ActiveJar} src={jar}/>}
   {props.view==='moneyJar'&&<img alt={'moneyJar'} className={props.result===0?style.jar:style.ActiveJar} src={moneyJar}/>}
   {props.view==='moneyJar'&&<MyButton id={props.id} className={props.result===0?style.button:style.ActiveButton} onClick={()=>props.setPanel(true)} view={'underline'} text={'Double Check'}/>}
    </div>
}) 