import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className="footer-container">
      <p>Made By Lucas Ribeiro Pires</p>
      <p className="icons">
        <Link href="https://github.com/lucaspires-source">
          <AiOutlineGithub />
        </Link>
      </p>
    </div>
  )
}

export default Footer
