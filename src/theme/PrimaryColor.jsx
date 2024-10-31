import { useThemeContext } from "../context/theme-context"
export const PrimaryColor = ({className}) => {
    const {themeHandler}=useThemeContext();
  return (
    <button className={className} onClick={()=>themeHandler(className)}></button>
  )
}
export default PrimaryColor

