import { useState } from "react"

import "./index.css"
import PropTypes from "prop-types"

const Dialog = ({ isOpen = false, render, renderBtn }) => {
  const [open, setOpen] = useState(isOpen)

  function closeModal() {
    setOpen(false)
  }
  function openModal() {
    setOpen(true)
  }

  function controlModal(ref) {
    if (ref && open) {
      ref?.showModal()
    } else {
      ref?.close()
    }
  }

  return (
    <>
      <dialog ref={controlModal} className="dialog">
        {render(closeModal)}
      </dialog>
      {renderBtn(openModal)}
    </>
  )
}
export default Dialog

Dialog.propTypes = {
  isOpen: PropTypes.bool, // isOpen is a boolean, defaults to false
  render: PropTypes.func.isRequired, // render prop is required and must be a function
  renderBtn: PropTypes.func, // renderBtn prop is optional and must be a function
}
