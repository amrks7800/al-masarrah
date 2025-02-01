import "./index.css"
import PropTypes from "prop-types"

const MemberCard = ({ name, title, description }) => {
  return (
    <div className="member-card">
      <div className="member-info">
        <img src="/images/avatar.svg" alt="" />
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default MemberCard

MemberCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}
