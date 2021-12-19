/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "@fontsource/poppins"

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"
import "./footer.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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

  return (
    <div className={"content"} style={{ height }}>
      <div className="bg" style={{ height }} />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} BENCH DOG CREATIONS</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
