import React from 'react'
import "../styles/PreNavbar.css"

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7.15 21.55Q6.425 21.55 5.913 21.038Q5.4 20.525 5.4 19.8Q5.4 19.075 5.913 18.562Q6.425 18.05 7.15 18.05Q7.875 18.05 8.387 18.562Q8.9 19.075 8.9 19.8Q8.9 20.525 8.387 21.038Q7.875 21.55 7.15 21.55ZM16.85 21.55Q16.125 21.55 15.613 21.038Q15.1 20.525 15.1 19.8Q15.1 19.075 15.613 18.562Q16.125 18.05 16.85 18.05Q17.575 18.05 18.087 18.562Q18.6 19.075 18.6 19.8Q18.6 20.525 18.087 21.038Q17.575 21.55 16.85 21.55ZM6.025 5.75 8.55 11.05H15.375Q15.45 11.05 15.525 11.012Q15.6 10.975 15.625 10.9L18.325 6.025Q18.375 5.925 18.325 5.838Q18.275 5.75 18.175 5.75ZM5.3 4.25H19.175Q19.875 4.25 20.163 4.762Q20.45 5.275 20.15 5.85L16.925 11.65Q16.7 12.075 16.3 12.312Q15.9 12.55 15.4 12.55H8.1L6.95 14.675Q6.875 14.8 6.938 14.925Q7 15.05 7.15 15.05H18.6V16.55H7.15Q6.15 16.55 5.65 15.688Q5.15 14.825 5.625 13.975L7.05 11.4L3.4 3.75H1.5V2.25H4.35ZM8.55 11.05H15.55Q15.55 11.05 15.55 11.05Q15.55 11.05 15.55 11.05Z"/></svg>
const PreNavbar = () => {
  return (
    <div className='preNav'>
        <div>
        <a  href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
                 <a  href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
        </div>

        <div>
        <a  href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
                 <a  href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
                 <a  href="https://store.mi.com/in/site/login"> {cartIcon} CART (0)</a>
        </div>
    </div>
  )
}

export default PreNavbar