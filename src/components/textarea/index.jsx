import PropTypes from "prop-types"
import "./index.css"

const Textarea = ({
  placeholder,
  label,
  variant,
  register,
  error,
  ...props
}) => {
  return (
    <div className={`textarea ${variant && variant} ${error && "error"}`}>
      {label && <label htmlFor="main-textarea">{label}</label>}
      <textarea
        className="main-textarea"
        placeholder={placeholder}
        id="main-textarea"
        {...props}
        {...register?.(props.name, props?.validation)}
      ></textarea>

      {error && <span className="error-message">{error.message}</span>}
    </div>
  )
}
export default Textarea

Textarea.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
}
