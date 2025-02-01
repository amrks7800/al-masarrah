import "./button.css"
import PropTypes from "prop-types"

const Button = ({
  children,
  icon,
  variant = "primary",
  pill = true,
  iconLocation = "left",
  size = "md",
  isLoading = false,
  ...props
}) => {
  return (
    <button
      className={`btn ${variant} ${pill && "pill"} ${size}`}
      {...props}
      disabled={isLoading}
    >
      <div className="flex justify-center items-center">
        {isLoading ? (
          "جاري التحميل"
        ) : (
          <>
            {iconLocation === "right" && icon}
            <span>{children}</span>
            {iconLocation === "left" && icon}
          </>
        )}
      </div>
    </button>
  )
}
export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired, // Required child content (text, element, etc.)
  icon: PropTypes.node, // Optional icon element
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "ghost" /* Add more variants as needed */,
  ]),
  pill: PropTypes.bool,
  iconLocation: PropTypes.oneOf(["left", "right"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]), // Define valid size options
  isLoading: PropTypes.bool,
  // ... any other props you want to define types for
}
