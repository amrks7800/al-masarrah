import { useEffect, useState } from "react"
import "./index.css"
import PropTypes from "prop-types"
const Switch = ({ onCheckChange, checked = false, id = "switch" }) => {
  const [isChecked, setIsChecked] = useState(checked)
  const [isRendered, setIsRendered] = useState(false)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    if (onCheckChange && isRendered) onCheckChange(isChecked, setIsChecked)
  }, [isChecked])

  useEffect(() => {
    setIsRendered(true)
  }, [])

  return (
    <div className="switch">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor={id}>
        <span className={`slider ${isChecked ? "slider--active" : ""}`} />
      </label>
    </div>
  )
}

export default Switch

Switch.propTypes = {
  onCheckChange: PropTypes.func,
  checked: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
