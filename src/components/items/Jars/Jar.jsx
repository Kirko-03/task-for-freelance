import mainJar from '../../../assets/images/MainJar.png'  
import jar from '../../../assets/images/Jar.png'  
import moneyJar from  '../../../assets/images/moneyJar.png'  
import { MyButton } from '../../utils/buttons/MyButton'
 const style = require('./Jar.module.css')

export const Jar = (props) =>{

 return <div>
   {props.view==='mainJar'&&<img alt={'mainJar'} className={style.mainJar} src={mainJar}/>}
   {props.view==='jar'&&<img alt={'Jar'} className={style.jar} src={jar}/>}
   {props.view==='moneyJar'&&<img alt={'moneyJar'} className={style.jar} src={moneyJar}/>}
   {props.view==='moneyJar'&&<MyButton className={style.button} onClick={()=>props.setPanel(true)} view={'underline'} text={'Double Click'}/>}
    </div>
} 