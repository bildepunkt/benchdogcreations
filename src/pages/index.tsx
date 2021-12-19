import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <div className="bg" style={{ height: window.innerHeight }} />
      <div className="logo">
        <StaticImage
          src="../images/logo.png"
          quality={95}
          alt="logo badge"
          placeholder="blurred"
        />
      </div>
    </Layout>
  )
}

export default IndexPage
