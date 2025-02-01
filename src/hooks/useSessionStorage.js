import { useState, useEffect } from "react"

const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error("Failed to retrieve value from session storage:", error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error("Failed to save value to session storage:", error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export default useSessionStorage
