const style = require('./MyButton.module.css')

export const MyButton = ({text,view,...rest}) =>{
    return <div className={style.buttons} {...rest}>
        {view==='underline'&&<button className={style.underlinedButton}>{text}</button>}
        {view==='border'&&<button className={style.borderButton}>{text}</button>}
    </div>
} 