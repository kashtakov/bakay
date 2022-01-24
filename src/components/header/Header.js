
import logo from '../../resources/img/logo.jpg';
import './header.css'

 

const Header = (props) =>{
    const logoMain = logo;
    return  (
        <div className ="header">
        <div className="container">
         <div className="header-wrap">
            <div className="logo"><a href="#"><img src={logoMain} alt="logo"/></a></div>
            <div className="menu"><div className="menu-item"></div><div className="menu-item"></div><div className="menu-item"></div></div>
         </div>
        </div>
    </div>
    )
    
}

export default Header;