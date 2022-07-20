import { useContext } from "react"
import { ThemeSwitcher } from "../../Contexts/ThemeContext";
import  '../Toggle/toggle.css'
const Toggle = () => {


    const themeData = useContext(ThemeSwitcher)
    const { theme, setTheme } = themeData

    const switchHandler = () => {
        setTheme((prev) => !prev)
    }

    return (
        <>
            <div className={`switch ${theme ? "" : "dark"}`} onClick={switchHandler}>
                <div className="toggle_circle">
                </div>
            </div>
        </>
    )
}

export default Toggle;