import * as React from "react"
import { FaRegEnvelope, FaFacebook, FaInstagram } from "react-icons/fa"

const Footer = () => (
  <footer>
    <div className="copyright">
      © {new Date().getFullYear()} BENCH DOG CREATIONS
    </div>
    <div className="links">
      <a href="//www.instagram.com/benchdogcreations/">
        <FaInstagram />
      </a>
      <a href="//www.facebook.com/bench.dog.creations">
        <FaFacebook />
      </a>
      <a href="mailto:chris@benchdogcreations.com">
        <FaRegEnvelope />
      </a>
    </div>
  </footer>
)

export default Footer
