import {Jar} from './items/Jar'
import {MoneyForm} from './items/Money/MoneyForm'
 const style = require('./FormApp.module.css')

export const FormApp = () => {
  return <div className={style.formApp}>
      <h2> Make three different combinations to get $0.56</h2>
      <MoneyForm/>
     <div  className={style.mainJar}>
      <Jar view={'mainJar'} />
      </div>
      <div className={style.jars}>
      <Jar view={'jar'}/>
      <Jar view={'jar'}/>
      <Jar view={'jar'}/>
      </div>
  </div>;
};
