import { useContext } from "react";
import ThemeContext from '../Themes/themeContext'
const ThemeButton = () => {
    const [theme, toggleTheme] = useContext(ThemeContext)
    return(
        <>
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'dark' : 'light'}
        </button>
        </>
    )
}


export default ThemeButton;
