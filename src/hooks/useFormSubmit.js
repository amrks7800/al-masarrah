import { useEffect } from "react"
import { useState } from "react"

const useFormSubmit = ({ defaultValues }) => {
  const [values, setValues] = useState(defaultValues || {})
  const [errors, setErrors] = useState({})
  const [formState, setFormState] = useState("idle")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let entries = Object.entries(errors)

    entries.forEach(entry => {
      if (entry[1]) setFormState("error")
    })
  }, [errors, values])

  // handling formState errors
  useEffect(() => {
    let entries = Object.entries(errors)
    let bools = []

    entries.forEach(entry => {
      bools.push(Boolean(entry[1]))
    })

    if (bools.every(b => b === false)) setFormState("idle")
  }, [errors])

  const register = (name, validation) => {
    const onChange = e => {
      setErrors(prev => ({
        ...prev,
        [name]: null,
      }))

      if (!e.target) return

      setValues(prev => ({
        ...prev,
        [name]: extractValue(e.target),
      }))

      setErrors(prev => ({
        ...prev,
        [name]: validate(validation, extractValue(e.target)),
      }))
    }

    const ref = ref => {
      if (!ref) return
      if (ref.type !== "checkbox" && ref.type !== "file")
        ref.value = values[name] ? values[name] : null

      if (ref.type === "checkbox")
        ref.checked = values[name] ? values[name] : null
    }

    const onBlur = e => {
      if (!e.target) return

      if (!validation.optional)
        setErrors(prev => ({
          ...prev,
          [name]: validate(validation, extractValue(e.target)),
        }))
    }

    return {
      onChange,
      ref,
      onBlur,
    }
  }

  function handleSubmit(cb) {
    return async e => {
      e.preventDefault()
      if (formState === "error") return

      setIsLoading(true)
      await cb(values)
      setIsLoading(false)
    }
  }

  return {
    register,
    values,
    handleSubmit,
    formState: {
      errors,
      isSubmitting: isLoading,
    },
  }
}
export default useFormSubmit

function validate(validation, value) {
  if (!validation) return

  let error = null

  if (validation.refine) {
    const [result, message] = validation?.refine(value)

    if (!result) {
      error = {
        message,
      }
    }
  }

  if (validation.min) {
    if (value.length < validation.min.length) {
      error = {
        message: validation.min.message
          ? validation.min.message
          : `Minimum ${validation.min.length} characters required`,
      }
    }
  }

  if (validation.max) {
    if (value.length > validation.max.length) {
      error = {
        message: validation.max.message
          ? validation.max.message
          : `Maximum ${validation.max.length} characters allowed`,
      }
    }
  }

  if (!validation.optional && value.length === 0) {
    error = { message: "هذا الحقل مطلوب" }
  }

  return error
}

const extractValue = ref => {
  if (ref.type === "checkbox") {
    return ref.checked
  }

  if (ref.type === "file") {
    console.log(ref.files[0])
    return ref.files[0]
  }

  return ref.value
}
