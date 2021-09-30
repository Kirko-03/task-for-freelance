import React from 'react'
const style = require('./MyButton.module.css')

export const MyButton = React.memo(({text,view,...rest}) =>{
    return <div className={style.buttons} {...rest}>
        {view==='underline'&&<button className={style.underlinedButton}>{text}</button>}
        {view==='border'&&<button className={style.borderButton}>{text}</button>}
        {view==='submit'&&<button className={style.submitButton}>{text}</button>}
    </div>
})