import { Button } from "../"
import "./file.css"
import PropTypes from "prop-types"

const File = ({ name, link }) => {
  const n = name.split("_").join(" ").split(".")[0]
  return (
    <div className="file">
      <p>{n}</p>
      <a
        href={link}
        download={"name"}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Button>تحميل الملف المرفق</Button>
      </a>
    </div>
  )
}

export default File

File.propTypes = {
  name: PropTypes.string,
}
