import logoInsta from '../../assets/logoInsta.png'
import logoLink from '../../assets/logoLink.png'
import logoZap from '../../assets/logoWhats.png'
import logoGmail from '../../assets/logoGmail.png'

import {FooterContainer} from './styles'
export function Footer() {
    return(
        <FooterContainer id="footer">
             <ul>
                <li>  <img  width="25px" src={logoInsta} alt="" />    <a href="https://www.instagram.com/edu.prad0/" target="_blank" rel="noopener noreferrer" >   Instagram: Edu.prad0 </a> </li>
                <li>  <img  width="25px" src={logoGmail} alt="" />    <a href="dpradoeduardo@gmail.com" target="_blank" rel="noopener noreferrer" >  Email: dpradoeduardo@gmail.com  </a> </li>
                <li>  <img  width="25px" src={logoLink} alt="" />   <a href="www.linkedin.com/in/d-prado-eduardo" target="_blank" rel="noopener noreferrer" >  Linkedin </a> </li>
                <li>  <img  width="25px" src={logoZap} alt="" />   <a href="https://web.whatsapp.com/send?phone=5511973252568" target="_blank" rel="noopener noreferrer" >  WhatsApp (11) 97325-2568 </a> </li>
            </ul>
            <p>By ❤️ Eduardo @2021</p>
        </FooterContainer>
    );
}