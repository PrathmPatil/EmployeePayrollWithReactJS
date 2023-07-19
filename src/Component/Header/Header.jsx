import React from 'react'
import style from "./Header.module.css"
import logoimage from '../Image/logo.png'

function Header() {  
  return (
    <div>
        <div className={style.header}>
            <div className={style.leftside}>
                <div className={style.leftside_logo}>
                    <img id={style.profilelogo} src={logoimage} alt="person.png" />
                </div>
                <div className={style.leftside_text}>
                    <div id={style.employee}>EMPLOYEE</div>
                    <div id={style.payroll}>PAYROLL</div>
                </div>

            </div>
            <div className={style.rightside}>
              <span className={style.right_text}>Employee Payroll UI/UX Design</span>
                
            </div>
        </div>
      {/* <div className="header" style={{color:"red",height:"20px",width:"100vw",backgroundColor:"grey"}} >header</div>
      <div className={style.header}>external css</div> */}
    </div>
  )
}

export default Header
