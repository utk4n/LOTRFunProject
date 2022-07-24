import Toggle from "../Header/Toggle/Toggle"
import {Link} from 'react-router-dom'
import toggleLightImg from '../../assets/ThemeSwitcherImages/lightSide.png'
import toggleDarkImg from '../../assets/ThemeSwitcherImages/darkSide.jpg'
import logo from '../../assets/Logo/logo.png'
const Header = () => {

    return (
            <>

        <header>
            
          <Link to="/"><div className="logo"><img src={logo} alt=""/></div></Link>
            <div className="select_side">
                <img src={toggleLightImg} alt=""/>
                <Toggle />
                <img src={toggleDarkImg} alt=""/>
            </div>

        </header>
        
        </>
    )
}

export default Header;