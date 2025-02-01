import { useEffect } from "react"
import "./index.css"
import PropTypes from "prop-types"

const Toast = ({ message, type, showToast, setShowToast }) => {
  useEffect(() => {
    setTimeout(() => setShowToast(false), 4000)
  }, [])

  if (!showToast) {
    return null
  }

  return (
    <div className={`toast ${type}`}>
      <p>{message}</p>
    </div>
  )
}

export default Toast

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  showToast: PropTypes.bool.isRequired,
  setShowToast: PropTypes.func.isRequired,
}
