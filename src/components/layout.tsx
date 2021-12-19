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
  const isBrowser = typeof window !== "undefined"
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      className={"content"}
      style={{ height: isBrowser ? window.innerHeight : 0 }}
    >
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} BENCH DOG CREATIONS</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
