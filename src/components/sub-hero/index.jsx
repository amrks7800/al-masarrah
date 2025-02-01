import PropTypes from "prop-types"
import "./index.css"

const SubHeroSection = ({ title, subTitle, showSearch = true }) => {
  return (
    <section className="sub-hero">
      <h2>{title}</h2>
      <p>{subTitle}</p>
      {/* {showSearch && <SearchInput />} */}
    </section>
  )
}
export default SubHeroSection

SubHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  showSearch: PropTypes.bool,
}
