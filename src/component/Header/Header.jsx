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
            <div data-aos="zoom-in" className="TopNavMenu-popup ">
              <div className="TopNavMenu-popup-content-wrapper">
                <button className="TopNavMenu-logo">
                  <svg
                    width={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="Menu / Close_MD">
                        {" "}
                        <path
                          id="Vector"
                          d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>{" "}
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
