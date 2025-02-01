import PropTypes from "prop-types"
import "./index.css"

const MainTitle = ({ text, supText, Element = "h1" }) => {
  return (
    <div className="main-title__wrapper">
      <span className="intro-title">{supText}</span>
      <Element className="main-title">{text}</Element>
    </div>
  )
}
export default MainTitle

MainTitle.propTypes = {
  text: PropTypes.string.isRequired,
  supText: PropTypes.string,
  Element: PropTypes.string,
}
