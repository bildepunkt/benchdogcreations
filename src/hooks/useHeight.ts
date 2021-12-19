import { useEffect, useState } from "react"

export function useHeight(): number {
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : undefined
  )

  useEffect(() => {
    let timeoutId = null
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setHeight(window.innerHeight)
      }, 256)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return height
}
