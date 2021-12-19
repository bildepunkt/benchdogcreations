import * as React from "react"

export function useHeight(): number {
  const [height, setHeight] = React.useState(
    typeof window !== "undefined" ? window.innerHeight : undefined
  )

  React.useEffect(() => {
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
  }, [])

  return height
}
