import {JarSubmit} from "../items/Jars/JarSubmit"
import {MyButton} from "../utils/buttons/Button/MyButton"
const style = require("./SubmitPanel.module.css");

export const SubmitPanel = ({result,countFinish,finish,oneJar,twoJar,threeJar,setCountFinish}) =>{
  
    console.log(oneJar);
    console.log(twoJar);
    console.log(threeJar);
    return <div className={style.submitPanel}>
        <div className={style.jars}>
          {finish && countFinish >= 3 ? (
             <div className={threeJar===56?style.moneyJarTrue:style.moneyJarFalse}>
                  <JarSubmit result={result}  view={"moneyJar"}   />
              </div>
          ) : (
              <div className={style.jar}>
                  <JarSubmit  result={result}  view={"jar"} />
                  </div>
          )}
          {finish  && countFinish >= 2? (
             <div className={twoJar===56?style.moneyJarTrue:style.moneyJarFalse}>
             <JarSubmit  result={result}  view={"moneyJar"}   />
         </div>
     ) : (
         <div className={style.jar}>
             <JarSubmit  result={result}  view={"jar"} />
             </div>
          )}
          {finish && countFinish >= 1 ? (
              <div className={oneJar===56?style.moneyJarTrue:style.moneyJarFalse}>
              <JarSubmit result={result}  view={"moneyJar"}   />
          </div>
      ) : (
          <div className={style.jar}>
              <JarSubmit  result={result}  view={"jar"} />
              </div>
          )}
          
        </div>
        <div className={style.button}>
            <MyButton view={'border'} onClick={()=>setCountFinish(0)} text={'Redo'}></MyButton>
        </div>
    </div>
}