import { useState, useEffect } from 'react'

const useSessionStorage = (storageKey, defaultValue) => {
  console.log('hook')
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.sessionStorage.getItem(storageKey)
      if (value) return JSON.parse(value)
      //   if (value) return value
      else {
        window.sessionStorage.setItem(storageKey, defaultValue)
        return defaultValue
      }
    } catch (error) {
      return defaultValue
    }
  })
  const setValue = (newValue) => {
    try {
      window.sessionStorage.setItem(storageKey, JSON.stringify(newValue))
    } catch (error) {}
    setStoredValue(newValue)
  }
  return [storedValue, setValue]
}
export default useSessionStorage
