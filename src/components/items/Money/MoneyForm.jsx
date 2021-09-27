
import cent from '../../../assets/images/cent.png'
import fiveCent from '../../../assets/images/5cent.png'
import oneDime from '../../../assets/images/10cent.png'
import twentyFiveCents from '../../../assets/images/25cent.png'

const style = require('./MoneyForm.module.css')
export const MoneyForm = () =>{
    let count = 0
    const arrayCents = [twentyFiveCents,oneDime,fiveCent,cent]
    return <div className={style.moneyForm}>
    {arrayCents.map(cents=><div><div  className={style.count}>×{count}</div><img className={style.coin} src={cents}></img></div>)}
    </div>
}