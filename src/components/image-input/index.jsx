import { useState } from "react"
import "./index.css"
import PropTypes from "prop-types"

const ImageInput = ({ currentImage, register, error, ...props }) => {
  const [src, setSrc] = useState(currentImage || "/images/empty-image.svg")

  const hookFormProps = register(props.name, props?.validation)

  const onFileInputChange = e => {
    setSrc(URL.createObjectURL(e.target.files[0]))

    hookFormProps.onChange(e)
  }

  return (
    <div className={`image-input ${error ? "error" : ""}`}>
      <input
        type="file"
        id="image-input"
        {...props}
        {...hookFormProps}
        onChange={onFileInputChange}
      />
      <label htmlFor="image-input">
        <img src={src} alt="Image preview" />
      </label>
      {error && <span className="error-message">{error.message}</span>}
    </div>
  )
}
export default ImageInput

ImageInput.propTypes = {
  currentFile: PropTypes.string, // Optional file name
  register: PropTypes.func.isRequired, // Function from react-hook-form
  error: PropTypes.object, // Optional error object from react-hook-form
  // Spread props can be anything, so no specific type is needed here
}
