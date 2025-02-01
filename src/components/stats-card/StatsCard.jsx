import PropTypes from "prop-types"
import "./stats-card.css"

const StatsCard = ({ icon, number, text }) => {
  return (
    <div className="stat-card flex justify-center">
      <div className="icon-shape">{icon}</div>
      <div className="text">
        <h2>{number}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
export default StatsCard

StatsCard.propTypes = {
  icon: PropTypes.node.isRequired,
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
