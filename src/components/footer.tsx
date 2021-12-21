import * as React from "react"
import { FaRegEnvelope, FaFacebook, FaInstagram } from "react-icons/fa"

import * as style from "./footer.module.scss"

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.copyright}>
      © {new Date().getFullYear()} BENCH DOG CREATIONS
    </div>
    <div className={style.links}>
      <a href="//www.instagram.com/benchdogcreations/">
        <FaInstagram title="Instagram" role="img" />
      </a>
      <a href="//www.facebook.com/bench.dog.creations">
        <FaFacebook title="Facebook" role="img" />
      </a>
      <a href="mailto:chris@benchdogcreations.com">
        <FaRegEnvelope title="Email" role="img" />
      </a>
    </div>
  </footer>
)

export default Footer
