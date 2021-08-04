import React from 'react';
import Logotip from '../Logo/Logotip'
import MenuComponent from '../FooterMenu/FooterMenu';
import './Footer.scss'

const Footer = (props) => {
  return (
        <>
            <div className='footer wrapper'>
                <div className="footer__menu">
                
                    <Logotip />
                
                    <MenuComponent />
            </div>
               <div className="footer__text">
                Rylee + Cru is a children’s line founded by illustrator Kelli Murray and inspired by her own little ones. Rylee + Cru merges art and imagination, offering unique and artistic clothing for the modern child.
               </div>

             <span>© 2021, Rylee + Cru |</span>
             <span>Powered by Shopify</span>
            </div>
        </>
  )
}

export default Footer;