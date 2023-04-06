import React, { useEffect, useRef, useState } from "react"

const Header = () => {
  const [MenuOpen, setmenuOpen] = useState()
  const ref = useRef(null)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setmenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header ref={ref} className="TopNav">
      <div className="TopNav-wrapper">
        <div className="TopNav-logo">
          <img className="logo" src="/logo.svg" alt="" />
        </div>
        <div className="TopNavMenu show">
          <div
            onClick={() => setmenuOpen(!MenuOpen)}
            className="TopNavMenu-hamburger"
          >
            <div id="line-1" />
            <div id="line-2" />
          </div>
          {MenuOpen && (
            <div data-aos="zoom-in" className="TopNavMenu-popup z-[999999]">
              <div className="TopNavMenu-popup-content-wrapper">
                <button className="TopNavMenu-logo">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 102 39"
                    style={{ enableBackground: "new 0 0 102 39" }}
                    xmlSpace="preserve"
                  >
                    <path
                      className="logo-icon"
                      d="M19.1,1C9.1,1,1,9.1,1,19.1s8.1,18.1,18.1,18.1V1z"
                    />
                    <g className="logo-text">
                      <path
                        className="logo-text-1"
                        d="M42.6,26.2c-3.6,0-6-2.4-6-6.9V19c0-4.3,2.6-7.1,5.9-7.1c2.6,0,4.7,1.1,5.1,4h2.9c-0.6-4.7-4.2-6.4-8-6.4
            c-4.9,0-9,3.8-9,9.4v0.3c0,5.7,3.9,9.4,9.1,9.4c4.1,0.2,7.7-2.8,8.1-6.9h-2.8C47.6,24.4,45.3,26.4,42.6,26.2z"
                      />
                      <rect
                        className="logo-text-2"
                        x="56.2"
                        y="2.2"
                        width={3}
                        height="26.1"
                      />
                      <polygon
                        className="logo-text-3"
                        points="71,9.8 63.7,28.3 66.9,28.3 72.9,12.5 78.8,28.3 82.1,28.3 74.8,9.8  "
                      />
                      <polygon
                        className="logo-text-4"
                        points="97.9,9.8 92.4,24.4 86.7,9.8 83.6,9.8 90.8,27.8 87.5,35.9 90.5,35.9 101,9.8   "
                      />
                    </g>
                  </svg>
                </button>

                <div
                  data-aos="fade-up"
                  className="TopNavMenu-popup-item-wrapper"
                >
                  <div className="TopNavMenu-popup-item">
                    <a href="/clients/">Clients</a>
                  </div>
                  <div className="TopNavMenu-popup-item">
                    <a href="/work/">Work</a>
                  </div>
                  <div className="TopNavMenu-popup-item">
                    <a href="/about/">About</a>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="TopNavMenu-popup-email-wrapper"
                >
                  <div className="TopNavMenu-popup-email-title">
                    Get in touch
                  </div>
                  <div className="TopNavMenu-popup-email">
                    <a href="mailto:hey@clay.global">hey@clay.global</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>{" "}
      </div>
    </header>
  )
}

export default Header
