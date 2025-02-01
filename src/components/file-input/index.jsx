import { useState } from "react"
import "./index.css"
import pdf from "/icons/pdf.svg"
import xIcon from "/icons/x-icon.svg"
import correct from "/icons/green-correct.svg"
import Button from "../button/Button"
import PropTypes from "prop-types"

const FileInput = ({ currentFile, register, error, ...props }) => {
  const [fileName, setFileName] = useState(currentFile)

  const hookFormProps = register(props.name, props?.validation)

  return (
    <div className={`file-input ${error && "error"}`}>
      <input
        type="file"
        id="file-input"
        {...props}
        {...hookFormProps}
        onChange={e => {
          setFileName(e.target.files[0]?.name)
          hookFormProps.onChange(e)
        }}
      />
      <label htmlFor="file-input">
        <div className="file-input__wrapper">
          {fileName ? (
            <>
              <Button variant="ghost">
                <img src={xIcon} alt="" className="x-icon" />
              </Button>

              <img src={pdf} alt="" className="pdf-icon" />
              <p className="flex items-center">
                <img src={correct} alt="" className="correct" />
                <span>{fileName}</span>
              </p>
            </>
          ) : (
            <span className="empty-file">لا يوجد ملف</span>
          )}
        </div>
      </label>
      {error && <span className="error-message">{error.message}</span>}
    </div>
  )
}
export default FileInput

FileInput.propTypes = {
  currentFile: PropTypes.string, // Optional file name
  register: PropTypes.func.isRequired, // Function from react-hook-form
  error: PropTypes.object, // Optional error object from react-hook-form
  // Spread props can be anything, so no specific type is needed here
}
