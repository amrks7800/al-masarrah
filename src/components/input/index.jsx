import PropTypes from "prop-types"
import "./index.css"

const Input = ({
  placeholder,
  type = "text",
  label,
  variant,
  register,
  error,
  ...props
}) => {
  return (
    <div className={`input-group ${variant && variant} ${error && "error"}`}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input
        className={`main-input`}
        type={type}
        placeholder={placeholder}
        {...props}
        {...register?.(props.name, props?.validation)}
      />
      {error && <span className="error-message">{error.message}</span>}
    </div>
  )
}
export default Input

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "number"]), // Add all supported types
  label: PropTypes.string,
  variant: PropTypes.string,
  register: PropTypes.func, // Can be null if not using form library
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  // Inherit any other props from the spread operator (...props)
}
