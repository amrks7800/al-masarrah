import PropTypes from "prop-types"
import "./index.css"
const ProgressPar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-thumb"
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  )
}
export default ProgressPar

ProgressPar.propTypes = {
  percentage: PropTypes.number.isRequired,
}
