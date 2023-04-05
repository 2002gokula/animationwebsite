import React from "react"

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-wrapper">
        <div className="Footer-top" data-scroll="" data-scroll-offset={50}>
          <div className="Footer-contacts">
            <span>Tijd voor koffie?</span>
          </div>
          <div className="Footer-email">
            <a href="mailto:hey@clay.global">Tom.Houpst@gmail.com</a>
          </div>
          <div className="Footer-logo-wrapper">
            <div className="Footer-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 52 80"
              >
                <path d="M40,6V62A28,28,0,0,1,40,6Z" />
              </svg>
            </div>
          </div>
        </div>
        <div
          className="Footer-bottom clearfix"
          data-scroll=""
          data-scroll-offset={30}
        >
          <div className="Footer-links">
            <ul>
              <li>
                <a href="/clients/">Waarom WRAPPED?</a>
              </li>
              <li>
                <a href="/Portfolio/">Portfolio</a>
              </li>
              <li>
                <a href="/OverOns/">Over Ons</a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://dribbble.com/clayglobal"
                  target="_blank"
                  rel="nofollow"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/clayglobal/"
                  target="_blank"
                  rel="nofollow"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer-address">
            <span>© WRAPPED - 2023</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
