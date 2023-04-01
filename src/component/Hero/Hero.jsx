import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
const Hero = () => {
  const [DetailsOpen, setDetailsOpen] = useState("1")
  const [SubDetailsOpen, setsubDetailsOpen] = useState("1")
  const SubDetailsData = [
    {
      Title: "Social Media",
      subTitle:
        "Bij WRAPPED bieden we een breed scala aan diensten aan, waaronder digitale marketing, webdesign, contentcreatie, social media management, branding en meer. Ons doel is om een complete oplossing te bieden die past bij de unieke behoeften van jouw bedrijf, zodat je merk kan groeien en je doelstellingen kunt bereiken.",
    },
    {
      Title: "Content Creation",
      subTitle:
        "Bij WRAPPED bieden we een breed scala aan diensten aan, waaronder digitale marketing, webdesign, contentcreatie, social media management, branding en meer. Ons doel is om een complete oplossing te bieden die past bij de unieke behoeften van jouw bedrijf, zodat je merk kan groeien en je doelstellingen kunt bereiken.",
    },
    {
      Title: "Paid-Advertisement",
      subTitle:
        "Bij WRAPPED bieden we een breed scala aan diensten aan, waaronder digitale marketing, webdesign, contentcreatie, social media management, branding en meer. Ons doel is om een complete oplossing te bieden die past bij de unieke behoeften van jouw bedrijf, zodat je merk kan groeien en je doelstellingen kunt bereiken.",
    },
  ]
  const DetailsData = [
    {
      Title: "Wat voor soort diensten biedt WRAPPED aan?",
      subTitle:
        "Bij WRAPPED bieden we een breed scala aan diensten aan, waaronder digitale marketing, webdesign, contentcreatie, social media management, branding en meer. Ons doel is om een complete oplossing te bieden die past bij de unieke behoeften van jouw bedrijf, zodat je merk kan groeien en je doelstellingen kunt bereiken.",
    },
    {
      Title: "4. Hoe bepalen jullie de kosten van een project?",
      subTitle:
        "Bij WRAPPED bieden we een breed scala aan diensten aan, waaronder digitale marketing, webdesign, contentcreatie, social media management, branding en meer. Ons doel is om een complete oplossing te bieden die past bij de unieke behoeften van jouw bedrijf, zodat je merk kan groeien en je doelstellingen kunt bereiken.",
    },
    {
      Title: "Do you do branding or should I hire a separate branding agency?",
      subTitle:
        "Bij WRAPPED bieden we een breed scala aan diensten aan, waaronder digitale marketing, webdesign, contentcreatie, social media management, branding en meer. Ons doel is om een complete oplossing te bieden die past bij de unieke behoeften van jouw bedrijf, zodat je merk kan groeien en je doelstellingen kunt bereiken.",
    },
    {
      Title: "How much does it cost to hire you for a UI/UX design project?",
      subTitle:
        "Bij WRAPPED bieden we een breed scala aan diensten aan, waaronder digitale marketing, webdesign, contentcreatie, social media management, branding en meer. Ons doel is om een complete oplossing te bieden die past bij de unieke behoeften van jouw bedrijf, zodat je merk kan groeien en je doelstellingen kunt bereiken.",
    },
    {
      Title:
        "Do you work with startups? If so, how can my early‑stage company afford you?",
      subTitle:
        "Bij WRAPPED bieden we een breed scala aan diensten aan, waaronder digitale marketing, webdesign, contentcreatie, social media management, branding en meer. Ons doel is om een complete oplossing te bieden die past bij de unieke behoeften van jouw bedrijf, zodat je merk kan groeien en je doelstellingen kunt bereiken.",
    },
    {
      Title: "Can you help us redesign our legacy enterprise/B2B software?",
      subTitle:
        "Bij WRAPPED bieden we een breed scala aan diensten aan, waaronder digitale marketing, webdesign, contentcreatie, social media management, branding en meer. Ons doel is om een complete oplossing te bieden die past bij de unieke behoeften van jouw bedrijf, zodat je merk kan groeien en je doelstellingen kunt bereiken.",
    },
    {
      Title: "What process should I expect from your UX agency?",
      subTitle:
        "Bij WRAPPED bieden we een breed scala aan diensten aan, waaronder digitale marketing, webdesign, contentcreatie, social media management, branding en meer. Ons doel is om een complete oplossing te bieden die past bij de unieke behoeften van jouw bedrijf, zodat je merk kan groeien en je doelstellingen kunt bereiken.",
    },
  ]

  const [number, setNumber] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1)
    }, 10)

    return () => {
      clearInterval(intervalId)
    }
  }, [])
  console.log(number)
  return (
    <div className="Content-body">
      <main className="Section Index">
        <div className="Index-content">
          <section
            className="VideoHead VideoHead--page-Main VideoHead--darkThemeOnReel"
            data-theme="light"
          >
            <h1
              className="VideoHead-header show"
              data-scroll=""
              data-scroll-offset={0}
              style={{ color: "#000" }}
            >
              <div className="VideoHead-header-desktop">
                <span data-index={1}>WRAPPED is een Media Agency</span>
                <span data-index={2}>
                  die jou social-media kan{" "}
                  <span className="subtitle">one-uppen.</span>
                </span>
              </div>
              <div className="VideoHead-header-mobile">
                <span data-index={1}>Clay is a UI/UX design</span>
                <span data-index={2}>and branding agency</span>
                <span data-index={3}> in San Francisco.</span>
              </div>
            </h1>
            <div
              className="VideoHead-reel show shown"
              data-scroll=""
              data-scroll-offset={0}
              data-video="https://s3.amazonaws.com/clay.global/static/img/reel/reel-min.mp4"
              style={{ width: 1050, paddingLeft: 40, paddingRight: 40 }}
            >
              <div className="VideoHead-reel-wrapper">
                <div className="VideoHead-reel-inner">
                  <video controls={false} loop autoPlay muted>
                    <source src="/herovideo.mp4" type="video/mp4" />
                    <source src="/herovideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="VideoHead-reel-overlay" />
                  <div className="VideoHead-reel-innerPlay">
                    <svg
                      className="VideoHead-reel-innerPlay-light"
                      viewBox="0 0 202 202"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="Button-19.10.29"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g id="Group-3">
                          <g id="button_v5-copy-2" opacity="0.7" fill="#000000">
                            <circle
                              id="Oval-Copy-2"
                              fillOpacity={0}
                              cx="99.8651685"
                              cy="102.134831"
                              r="63.5505618"
                            />
                            <path
                              d="M101,0 C156.78076,0 202,45.2192403 202,101 C202,156.78076 156.78076,202 101,202 C45.2192403,202 0,156.78076 0,101 C0,45.2192403 45.2192403,0 101,0 Z M76.0337079,62.4157303 L76.0337079,141.853933 L139.58427,102.134831 L76.0337079,62.4157303 Z"
                              id="Oval-Copy-3"
                              fillOpacity="0.25"
                            />
                          </g>
                          <polygon
                            id="Triangle-Copy-2"
                            fill="#FFFFFF"
                            transform="translate(107.808989, 102.134831) rotate(90.000000) translate(-107.808989, -102.134831) "
                            points="107.808989 70.3595506 147.52809 133.910112 68.0898876 133.910112"
                          />
                        </g>
                      </g>
                    </svg>
                    <svg
                      className="VideoHead-reel-innerPlay-dark"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 97 97"
                    >
                      <defs>
                        <radialGradient id="playWhiteGradient">
                          <stop
                            offset="0%"
                            className="VideoHead-reel-innerPlay-dark-gradientStart"
                          />
                          <stop
                            offset="100%"
                            className="VideoHead-reel-innerPlay-dark-gradientStop"
                          />
                        </radialGradient>
                      </defs>
                      <path
                        d="M68.5,107A48.5,48.5,0,1,1,117,58.5,48.5,48.5,0,0,1,68.5,107ZM88,58.5,56.79,39V78Z"
                        transform="translate(-20 -10)"
                        fill="url(#playWhiteGradient)"
                      />
                      <polygon points="68.01 48.5 36.79 68.01 36.79 28.99 68.01 48.5" />
                    </svg>
                  </div>
                  <div
                    id="player-mobile"
                    style={{ width: 1846, left: "-248px" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="VideoHead-popup-video">
              <div className="VideoHead-popup-video-exit">
                <div className="VideoHead-popup-video-exit-line-1" />
                <div className="VideoHead-popup-video-exit-line-2" />
              </div>
              <div className="VideoHead-popup-video-container">
                <div
                  className="VideoHead-popup-video-placeholder"
                  style={{ left: 0, top: 0, width: 0, height: 0 }}
                >
                  <div id="player"></div>
                </div>
              </div>
            </div>
          </section>
          <section className="IndexDescription" data-theme="light">
            <h2
              className="IndexDescription-text"
              data-scroll=""
              data-scroll-offset={50}
            >
              <div
                data-index={1}
                className="IndexDescription-text-line"
                style={{
                  willChange: "opacity, transform",
                  opacity: "1",
                  transform: "matrix(1, 0, 0, 1, 0, 30)",
                }}
              >
                WRAPPED is expert op het gebied van content,
              </div>
              <div
                data-index={2}
                className="IndexDescription-text-line"
                style={{
                  willChange: "opacity, transform",
                  opacity: "1",
                  transform: "matrix(1, 0, 0, 1, 0, 30)",
                }}
              >
                Social Media, and Paid-Advertisements.
              </div>
            </h2>
            <div
              className="IndexDescription-items"
              data-scroll=""
              data-scroll-offset={50}
            >
              {SubDetailsData.map((value, index) => (
                <div className="IndexDescription-item">
                  <div
                    onClick={() => setsubDetailsOpen(index)}
                    className="IndexDescription-item-title"
                    style={{
                      willChange: "opacity, transform",
                      opacity: "1",
                      transform: "matrix(1, 0, 0, 1, 0, 30)",
                    }}
                  >
                    {value.Title}
                    <em />
                  </div>
                  {SubDetailsOpen === index && (
                    <div className="IndexDescription-item-wrapper">
                      <div className="IndexDescription-item-text">
                        <p>{value.subTitle}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {/* <div className="IndexDescription-item">
                <div
                  className="IndexDescription-item-title"
                  style={{
                    willChange: "opacity, transform",
                    opacity: "1",
                    transform: "matrix(1, 0, 0, 1, 0, 30)",
                  }}
                >
                  Branding
                  <em />
                </div>
                <div className="IndexDescription-item-wrapper">
                  <div className="IndexDescription-item-text">
                    <p>
                      A brand today is all about how it makes your customers
                      feel. It's not a logo, visual identity, or digital product
                      design. but rather a cohesive system that spans across all
                      mediums and touchpoints. We're a branding agency offering
                      a complete solution from naming and logo design to
                      communications and style guides.
                    </p>
                  </div>
                </div>
              </div>
              <div className="IndexDescription-item">
                <div
                  className="IndexDescription-item-title"
                  style={{
                    willChange: "opacity, transform",
                    opacity: "1",
                    transform: "matrix(1, 0, 0, 1, 0, 30)",
                  }}
                >
                  User Experience
                  <em />
                </div>
                <div className="IndexDescription-item-wrapper">
                  <div className="IndexDescription-item-text">
                    <p>
                      UI/UX design is a defining factor for any digital product
                      these days. We're a user experience and UI design agency
                      focused on improving conversion and increasing customer
                      engagement. Our UI/UX design capabilities don't stop at
                      mobile apps, web applications, or multi‑platform digital
                      experiences. As a UX design agency, we create products and
                      services that provide outstanding usability while fully
                      embracing your brand's personality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="IndexDescription-item">
                <div
                  className="IndexDescription-item-title"
                  style={{
                    willChange: "opacity, transform",
                    opacity: "1",
                    transform: "matrix(1, 0, 0, 1, 0, 30)",
                  }}
                >
                  Development
                  <em />
                </div>
                <div className="IndexDescription-item-wrapper">
                  <div className="IndexDescription-item-text">
                    <p>
                      Our full‑stack design and development agency based in San
                      Francisco provides front‑end and back‑end development
                      services working closely with our designers. As a UX UI
                      and app development company, we build native mobile apps
                      for iOS and Android, web applications, apps for wearables,
                      and B2B/enterprise software.
                    </p>
                  </div>
                </div>
              </div>
              <div className="IndexDescription-item">
                <div
                  className="IndexDescription-item-title"
                  style={{
                    willChange: "opacity, transform",
                    opacity: "1",
                    transform: "matrix(1, 0, 0, 1, 0, 30)",
                  }}
                >
                  Web Design
                  <em />
                </div>
                <div className="IndexDescription-item-wrapper">
                  <div className="IndexDescription-item-text">
                    <p>
                      We're a web design agency creating next‑level websites by
                      strategically blending user experience and brand
                      storytelling. Our web designers and developers create
                      responsive websites that feel at home on any device.
                      Product landing pages, marketing sites, or UX UI for
                      company intranet portals – we do it all.
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="IndexDescription-item">
                <div
                  className="IndexDescription-item-title"
                  style={{
                    willChange: "opacity, transform",
                    opacity: "1",
                    transform: "matrix(1, 0, 0, 1, 0, 30)",
                  }}
                >
                  Enterprise UX
                  <em />
                </div>
                <div className="IndexDescription-item-wrapper">
                  <div className="IndexDescription-item-text">
                    <p>
                      We're a UI/UX design agency that believes business
                      software deserves the user‑friendliness and aesthetics of
                      best‑in‑class consumer apps. We're a digital agency that
                      transforms legacy enterprise platforms into delightful,
                      consumer‑grade experiences and design new B2B products
                      that people love using.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="IndexLogos" data-theme="light">
            <div
              className="IndexLogos-container"
              data-scroll=""
              data-scroll-offset={50}
            >
              <div className="IndexLogos-wrapper IndexLogos-first-line">
                <div className="IndexLogos-place IndexLogos-place--1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 50">
                    <g transform="translate(16 12)">
                      <g>
                        <polygon
                          className="colored"
                          points="121.8,16.5 126.8,8.5 121.7,8.5 117,16.2 117,0 112.2,0.5 112.2,24.6 117,24.6 117,16.8 121.9,24.6 127,24.6"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M102.5,8.2c-5.3,0-7.9,3.3-7.9,8V17c0,4.6,2.6,8,7.9,8c5.3,0,7.9-3.3,7.9-8v-0.8C110.4,11.6,107.8,8.2,102.5,8.2z M105.6,17.3c0,2.1-0.9,3.8-3.1,3.8c-2.2,0-3.1-1.7-3.1-3.8v-1.5c0-2.1,0.9-3.8,3.1-3.8c2.2,0,3.1,1.7,3.1,3.8V17.3z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M85.2,8.2c-5.3,0-7.9,3.3-7.9,8V17c0,4.6,2.6,8,7.9,8c5.3,0,7.9-3.3,7.9-8v-0.8C93.1,11.6,90.5,8.2,85.2,8.2zM88.3,17.3c0,2.1-0.9,3.8-3.1,3.8c-2.2,0-3.1-1.7-3.1-3.8v-1.5c0-2.1,0.9-3.8,3.1-3.8c2.2,0,3.1,1.7,3.1,3.8V17.3z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M69.2,8.2c-2.2,0-3.8,1.1-4.5,2.6V0L60,0.5v24.2h4.5v-2.4c0.7,1.6,2.3,2.8,4.7,2.8c4.4,0,6.5-3.4,6.5-7.9v-1C75.7,11.6,73.6,8.2,69.2,8.2z M70.9,17.2c0,2.3-0.9,4-3.2,4c-2,0-3-1.4-3-3.7v-1.7c0-2.3,1.1-3.7,3-3.7c2.3,0,3.2,1.7,3.2,4V17.2z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M50.9,8.2c-5.2,0-7.8,3-7.8,7.6v1.4c0,4.7,2.3,7.8,8.3,7.8c2.3,0,4.9-0.5,6.1-1.2l-0.9-3.3c-1.4,0.6-3.3,1-5.1,1c-2.7,0-3.6-1-3.7-3.2H58v-2.6C58,11.3,55.8,8.2,50.9,8.2z M53.7,15.1h-5.8c0-2.2,0.8-3.5,3-3.5c2.1,0,2.8,1.4,2.8,3.1V15.1z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M38.2,12c1.3,0,2.5,0.4,3.2,0.7l1.1-3.4c-1-0.7-2.7-1.1-4.6-1.1c-5.6,0-8.2,3.1-8.2,8V17c0,4.9,2.6,8,8.2,8c1.9,0,3.6-0.4,4.6-1.1l-1.1-3.4c-0.7,0.4-1.9,0.7-3.2,0.7c-2.6,0-3.7-1.5-3.7-4.1v-0.9C34.5,13.5,35.7,12,38.2,12z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M23.4,11c-0.7-1.6-2.2-2.8-4.6-2.8c-4.4,0-6.5,3.4-6.5,7.9v1c0,4.5,2.1,7.9,6.5,7.9c2.4,0,3.9-1.2,4.6-2.8v2.4h4.6V8.5h-4.6V11z M23.2,17.4c0,2.3-1,3.7-3,3.7c-2.2,0-3.1-1.6-3.1-4V16c0-2.4,0.9-4,3.1-4c2,0,3,1.5,3,3.8V17.4z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M3.2,6.1v2.4H0v4h3.2v12.1H8V12.5h3.6l0.4-4H8V6.1c0-1.5,0.4-2.2,1.9-2.2h2.1V0.2C11.4,0.1,10.2,0,9.3,0C4.8,0,3.2,2.1,3.2,6.1z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="IndexLogos-place IndexLogos-place--2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 50">
                    <g transform="translate(24 9)">
                      <g>
                        <path
                          className="colored"
                          d="M105.2,24.4c-2.1,0-3.5-0.9-4.5-2.7l12.3-5l-0.4-1c-0.8-2-3.1-5.7-7.9-5.7c-4.7,0-8.7,3.6-8.7,9c0,5,3.9,9,9.1,9c4.2,0,6.7-2.5,7.7-4l-3.1-2C108.6,23.4,107.2,24.4,105.2,24.4z M104.8,13.4c1.6,0,3,0.8,3.4,1.9l-8.2,3.3C99.9,15.2,102.8,13.4,104.8,13.4z"
                        />
                      </g>
                      <g>
                        <rect
                          className="colored"
                          x={90}
                          y={1}
                          width={4}
                          height="26.4"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M83.2,10.5V12h-0.1c-0.9-1.1-2.7-2-4.8-2c-4.6,0-8.8,4-8.8,9c0,5,4.2,9,8.8,9c2.2,0,3.9-1,4.8-2h0.1v1.3c0,3.4-1.9,5.3-4.9,5.3c-2.5,0-4-1.7-4.6-3.2l-3.5,1.4c1,2.4,3.7,5.3,8.2,5.3c4.7,0,8.8-2.7,8.8-9.4V10.5H83.2z M78.6,24.4c-2.8,0-5.1-2.3-5.1-5.4c0-3.2,2.3-5.5,5.1-5.5c2.8,0,4.9,2.3,4.9,5.5C83.5,22.1,81.3,24.4,78.6,24.4z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M58.6,9.9c-5.1,0-9.2,3.8-9.2,9c0,5.2,4.1,9,9.2,9c5.1,0,9.2-3.8,9.2-9C67.8,13.7,63.7,9.9,58.6,9.9zM58.6,24.4c-2.8,0-5.2-2.2-5.2-5.4c0-3.2,2.4-5.4,5.2-5.4s5.2,2.2,5.2,5.4C63.8,22.1,61.4,24.4,58.6,24.4z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M38.5,9.9c-5.1,0-9.2,3.8-9.2,9c0,5.2,4.1,9,9.2,9c5.1,0,9.2-3.8,9.2-9C47.7,13.7,43.6,9.9,38.5,9.9zM38.5,24.4c-2.8,0-5.2-2.2-5.2-5.4c0-3.2,2.4-5.4,5.2-5.4s5.2,2.2,5.2,5.4C43.7,22.1,41.3,24.4,38.5,24.4z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M14.5,27.9C6.6,27.9,0,21.7,0,14S6.6,0,14.5,0c4.4,0,7.5,1.7,9.8,3.8l-2.8,2.7c-1.7-1.5-3.9-2.7-7-2.7C8.8,3.8,4.3,8.3,4.3,14s4.5,10.1,10.3,10.1c3.7,0,5.9-1.5,7.2-2.8c1.1-1.1,1.8-2.7,2.1-4.8h-9.5v-3.8h13.3c0.1,0.7,0.2,1.5,0.2,2.4c0,2.9-0.8,6.4-3.4,8.9C22,26.6,18.8,27.9,14.5,27.9z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="IndexLogos-place IndexLogos-place--3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 50">
                    <g transform="translate(22 9)">
                      <g>
                        <path
                          className="colored"
                          d="M36.5527 22.8908L37.9677 19.59C39.517 20.735 41.5383 21.3412 43.5591 21.3412C45.0413 21.3412 45.9846 20.7686 45.9846 19.8929C45.9508 17.4678 37.0582 19.354 36.9907 13.257C36.957 10.1583 39.7191 7.7666 43.6267 7.7666C45.9508 7.7666 48.2751 8.33947 49.9256 9.65323L48.6034 13.0246C47.0847 12.05 45.2096 11.3708 43.4245 11.3708C42.2116 11.3708 41.4033 11.9433 41.4033 12.6845C41.4371 15.0761 50.3973 13.7624 50.4984 19.59C50.4984 22.7563 47.8034 24.9791 43.9633 24.9791C41.1341 24.9791 38.5403 24.3059 36.5527 22.8908"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M92.8957 18.3947C92.1899 19.641 90.8529 20.4823 89.3181 20.4823C87.0486 20.4823 85.2088 18.6427 85.2088 16.3733C85.2088 14.1036 87.0486 12.2636 89.3181 12.2636C90.8529 12.2636 92.1899 13.105 92.8957 14.3513L96.8291 12.1721C95.356 9.54389 92.5454 7.76685 89.3181 7.76685C84.5651 7.76685 80.7119 11.6198 80.7119 16.3733C80.7119 21.1263 84.5651 24.9795 89.3181 24.9795C92.5454 24.9795 95.356 23.202 96.8291 20.5739L92.8957 18.3947"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M53.0513 24.6426H57.9694V0.602783H53.0513V24.6426Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M99.313 0.602783V24.6426H104.231V17.4401L110.059 24.6426H116.345L108.934 16.0864L115.806 8.10269H109.789L104.231 14.7399V0.602783H99.313"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M73.1204 10.0573V8.10359H78.0384V24.6425H73.1204V22.6887C72.3121 24.0362 70.3245 24.9795 68.2363 24.9795C63.9245 24.9795 60.5225 21.1395 60.5225 16.3561C60.5225 11.5732 63.9245 7.76685 68.2363 7.76685C70.3245 7.76685 72.3121 8.7098 73.1204 10.0573ZM69.2804 20.4823C70.9309 20.4823 72.4128 19.6069 73.1204 18.4278V14.3856C72.4128 13.1732 70.9309 12.2636 69.2804 12.2636C67.0107 12.2636 65.1708 14.1036 65.1708 16.3733C65.1708 18.6427 67.0107 20.4823 69.2804 20.4823Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M10.581 0.0712891C8.98727 0.0712891 7.69531 1.36324 7.69531 2.95702C7.69531 4.5508 8.98727 5.84275 10.581 5.84275H13.4668V2.95702C13.4668 1.36324 12.1748 0.0712891 10.581 0.0712891"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M10.581 7.7666H2.88573C1.29195 7.7666 0 9.05855 0 10.6523C0 12.2461 1.29195 13.5381 2.88573 13.5381H10.581C12.1748 13.5381 13.4667 12.2461 13.4667 10.6523C13.4667 9.05855 12.1748 7.7666 10.581 7.7666"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M28.8574 10.6523C28.8574 9.05855 27.5654 7.7666 25.9717 7.7666C24.3779 7.7666 23.0859 9.05855 23.0859 10.6523V13.5381H25.9717C27.5654 13.5381 28.8574 12.2461 28.8574 10.6523"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M21.1621 10.6523V2.95702C21.1621 1.36324 19.8701 0.0712891 18.2764 0.0712891C16.6826 0.0712891 15.3906 1.36324 15.3906 2.95702V10.6523C15.3906 12.2461 16.6826 13.538 18.2764 13.538C19.8701 13.538 21.1621 12.2461 21.1621 10.6523"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M18.2764 28.9287C19.8701 28.9287 21.1621 27.6367 21.1621 26.043C21.1621 24.4492 19.8701 23.1572 18.2764 23.1572H15.3906V26.043C15.3906 27.6367 16.6826 28.9287 18.2764 28.9287"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M18.2764 21.2334H25.9716C27.5654 21.2334 28.8574 19.9414 28.8574 18.3476C28.8574 16.7539 27.5654 15.4619 25.9716 15.4619H18.2764C16.6826 15.4619 15.3906 16.7539 15.3906 18.3476C15.3906 19.9414 16.6826 21.2334 18.2764 21.2334"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M0 18.3476C0 19.9414 1.29195 21.2334 2.88573 21.2334C4.47951 21.2334 5.77146 19.9414 5.77146 18.3476V15.4619H2.88573C1.29195 15.4619 0 16.7539 0 18.3476"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M7.69531 18.3476V26.0429C7.69531 27.6367 8.98727 28.9287 10.581 28.9287C12.1748 28.9287 13.4668 27.6367 13.4668 26.0429V18.3476C13.4668 16.7537 12.1748 15.4619 10.581 15.4619C8.98727 15.4619 7.69531 16.7539 7.69531 18.3476"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="IndexLogos-place IndexLogos-place--4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 50">
                    <g transform="translate(16 8)">
                      <g>
                        <path
                          className="colored"
                          d="M130,19.5 L130,17.5 C130,12.6 127.5,9.2 122.2,9.2 C117.2,9.2 113.4,13 113.4,18.7 C113.4,24.4 117.3,28 122.9,28 C125.2,28 127.7,27.5 129.3,26.3 L129.3,22.8 C127.5,24 125.7,24.5 123.2,24.5 C120.4,24.5 117.6,22.8 117.3,19.5 L117.3,19.4 L130,19.4 L130,19.5 Z M122.1,12.6 C124.7,12.6 126.1,14.1 126.2,16.9 L117.5,16.9 C118,14.2 119.7,12.6 122.1,12.6 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M105.8,16.8 C103.7,16.2 102.9,15.6 102.9,14.4 C102.9,13.2 103.8,12.4 105.6,12.4 C107.5,12.4 109.1,13.1 110.7,14.2 L110.7,10.5 C109.2,9.6 107.5,9.1 105.5,9.1 C101.8,9.1 99,10.9 99,14.5 C99,17.6 100.6,19.1 104.4,20 C106.7,20.6 107.8,21.1 107.8,22.6 C107.8,24 106.6,24.6 104.8,24.6 C102.9,24.6 100.9,23.8 99.2,22.6 L99.2,26.4 C100.6,27.3 102.7,27.9 104.8,27.9 C108.7,27.9 111.7,26.2 111.7,22.4 C111.8,19.3 110,17.7 105.8,16.8 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M89.5,9.2 C87.2,9.2 85.2,9.8 83.6,10.7 L83.6,14.2 C85.1,13.3 86.8,12.7 88.9,12.7 C90.9,12.7 92.4,13.6 92.4,15.5 L92.4,17 L90.4,17 C85.1,17 82,18.8 82,22.4 C82,26.5 85.5,27.9 90.2,27.9 C92.3,27.9 94.7,27.6 96.4,27.2 L96.4,15.3 C96.3,10.8 93.5,9.2 89.5,9.2 Z M92.3,24.8 C91.6,24.9 90.7,25 90.1,25 C87.6,25 85.9,24.3 85.9,22.4 C85.9,20.6 87.8,19.8 90.6,19.8 L92.3,19.8 L92.3,24.8 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M71.3,9.2 C69.7,9.2 68,9.6 67.1,10.1 L67.1,0 L63,0 L63,26.8 C64.9,27.4 67.2,28 69.8,28 C76.5,28 80.4,24.1 80.4,18.3 C80.6,12.5 76.6,9.2 71.3,9.2 Z M70,24.6 C69,24.6 67.9,24.5 67.2,24.2 L67.2,13.7 C68,13.3 69.3,12.8 70.9,12.8 C74,12.8 76.5,14.9 76.5,18.4 C76.4,22.5 73.8,24.6 70,24.6 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M52.1,9.2 C49.4,9.2 46.3,9.8 43.8,10.7 L43.8,27.5 L47.9,27.5 L47.9,13.4 C49,13.1 50.4,12.9 51.8,12.9 C54.1,12.9 55.7,13.8 55.7,16.4 L55.7,27.6 L59.7,27.6 L59.7,16 C59.7,11 56.7,9.2 52.1,9.2 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M36.1,9.6 L40.2,9.6 L40.2,27.6 L36.1,27.6 L36.1,9.6 Z M38.1,6.7 C36.8,6.7 35.6,5.5 35.6,4.1 C35.6,2.7 36.7,1.6 38.1,1.6 C39.5,1.6 40.7,2.7 40.7,4.1 C40.7,5.6 39.5,6.7 38.1,6.7 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M24.1,9.2 C18.7,9.2 14.7,13 14.7,18.6 C14.7,24.2 18.6,28 24.1,28 C29.6,28 33.5,24.2 33.5,18.6 C33.5,13 29.6,9.2 24.1,9.2 Z M24.1,24.6 C21.1,24.6 18.8,22.3 18.8,18.7 C18.8,15 21,12.7 24.1,12.7 C27.2,12.7 29.4,15 29.4,18.7 C29.4,22.2 27.2,24.6 24.1,24.6 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M10.1,24.5 C6.6,24.5 4.1,22.2 4.1,18.7 C4.1,14.9 6.6,12.9 9.9,12.9 C10.9,12.9 11.8,13.1 12.7,13.4 C13.1,12.3 13.7,11.4 14.4,10.5 C12.9,9.7 11.4,9.3 9.5,9.3 C4.2,9.2 0,12.8 0,18.6 C0,24.4 4,28 9.6,28 C11.5,28 13.2,27.6 14.8,26.7 C14.1,25.9 13.4,24.9 13,23.9 C12.1,24.3 11.1,24.5 10.1,24.5 Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="IndexLogos-place IndexLogos-place--5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 50">
                    <g transform="translate(25 6)">
                      <g>
                        <path
                          className="colored"
                          d="M86.07,29.94 C85.846081,30.4955471 85.6915799,31.0766055 85.61,31.67 C85.15,34.86 86.83,35.35 88.12,35.11 C89.6079656,34.5139844 90.9364676,33.5792394 92,32.38 C91.75,33.31 91.82,34.97 93.16,35.14 C94.0275199,35.1890339 94.8835019,34.9226494 95.57,34.39 C98.42,32.87 101.85,27.79 102.73,26.32 L101.57,26.32 C100.31,28.19 98.7,30.64 96.68,31.8 C96.33,32.04 95.83,31.86 96.02,31.32 C96.6630682,29.8704488 97.4292059,28.4786877 98.31,27.16 L103.4,18.3 L99.91,18.3 L99.39,19.18 C99.1564644,18.8102475 98.8738926,18.4738526 98.55,18.18 C97.5817088,17.7286566 96.4498094,17.8041166 95.55,18.38 C91.8,20.53 89.06,24.79 86.9,28.1 C86.5829747,28.694317 86.3057,29.3089982 86.07,29.94 Z M92.07,30.85 L91.74,31.14 C91.26,31.56 90.74,32.01 90.17,31.79 C89.9992449,31.6997768 89.8834559,31.531696 89.86,31.34 C89.9375344,30.1384253 90.300951,28.9727495 90.92,27.94 L91.06,27.66 C92.6,25.14 94.39,22.16 97.06,20.1 C97.437689,19.7324508 97.9814423,19.5917594 98.49,19.73 C98.6363131,19.8496688 98.7296995,20.0220744 98.75,20.21 C98.7352402,20.3012138 98.7047899,20.3891812 98.66,20.47 C97.93,21.64 97.23,22.86 96.55,24.03 C95.2482427,26.423555 93.7497488,28.7047445 92.07,30.85 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M80.21,25.94 L79.76,27.26 C78.57,30.68 78.02,33.01 79.14,34.39 C80.75,36.33 83.41,34.32 85.57,31.66 L86.89,28.11 C86.89,28.11 84.62,31.8 83.36,32.11 C82.36,32.19 82.48,30.89 82.52,30.58 C82.9594121,28.4401566 83.6824624,26.3685334 84.67,24.42 C86.7091153,23.0383797 88.6351811,21.4968583 90.43,19.81 C93.4152587,17.0612844 96.0972486,14.0004635 98.43,10.68 C98.0405118,10.7530553 97.6460508,10.7965129 97.25,10.81 C94.11,15.1 87.69,21.34 85.74,22.27 C86.6,20.27 92.18,10.53 96.92,5.88 L97.66,5.18 C98.88,4 100.07,2.91 101,2.72 C101.09,2.72 101.22,2.72 101.33,2.95 C101.326797,3.73788508 101.097746,4.50833056 100.67,5.17 L100.15,6.23 C100.564867,6.15112948 100.975408,6.05099751 101.38,5.93 C102.118579,4.87370454 102.471637,3.59563682 102.38,2.31 C102.311879,1.87168055 101.97566,1.52345433 101.54,1.44 C100.12,1.18 98.54,2.21 97.34,3.04 C90.88,8 85.5,15 80.79,24.67 C80.2135748,24.9786204 79.5625832,25.120592 78.91,25.08 C78.59497,25.568838 78.4136782,25.954051 78.3007507,26.17 C78.9685099,26.1438151 79.5938773,26.0668983 80.21,25.94 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M78.91,25.08 C79.5008806,23.9492323 79.9509041,22.7502892 80.25,21.51 C80.3081277,21.1191625 80.3415274,20.7250456 80.35,20.33 C80.4171156,19.4763115 80.0390725,18.6483971 79.35,18.14 C78.4568487,17.7838627 77.4550362,17.8201603 76.59,18.24 C73.22,19.61 70.71,22.99 68.89,25.78 C67.7843942,27.5673053 67.0308554,29.5495875 66.67,31.62 C66.48,33.32 66.87,34.42 67.86,34.96 C68.7849257,35.2807406 69.8037407,35.1821456 70.65,34.69 C74.06,32.93 76.44,29.4 78.32,26.17 L78.91,25.08 Z M71,31.46 C70.8321569,31.205429 70.7482312,30.9046953 70.76,30.6 C70.76,28.68 72.83,25.25 74.31,23.38 C74.9538599,24.5350924 75.9737273,25.4349755 77.2,25.93 C76.17,28.24 72.55,33.18 71,31.46 Z M77.78,24.9 C76.6979164,24.6647441 75.8398113,23.8414271 75.56,22.77 C75.4043849,21.5240389 76.0599756,20.3174303 77.19,19.77 C77.6083329,19.4581609 78.1478109,19.3583944 78.65,19.5 C79.0369983,19.8100594 79.2372343,20.2974264 79.18,20.79 C79.1762644,21.124772 79.1495349,21.4588919 79.1,21.79 L79.1,21.86 C78.8051779,22.9239317 78.3749954,23.945615 77.82,24.9 L77.78,24.9 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M104.9,5 C106.790493,3.92924925 108.50963,2.58090674 110,1 C108.965583,3.02837949 107.553675,4.84078062 105.84,6.34 C103.2,8.66 98.59,11.1 94.2,10 C95,8.93 95.82,8 96.69,7 C99.5699486,7.22622364 102.44676,6.52541686 104.9,5 Z M87.32,2.44 C89,3.33 90.64,4.23 92.24,5.22 L93.24,5.81 C92.6,6.45 91.34,7.72 90.6,8.56 C89.09,7.92 84.6,4.54 82.49,3.86 C82.49,3.86 79.81,2.65 78.49,3.33 C78.49,3.57 78.49,3.88 78.49,4.11 C78.3791906,6.01725193 77.8354392,7.87421424 76.9,9.54 C75.44,11.85 73.66,14.37 70.9,15 C70.1814011,15.1393633 69.4547705,14.800269 69.1,14.16 C68.3,12.74 69.1,11.12 69.67,9.93 C71.2752797,6.90325963 73.7014305,4.3904606 76.67,2.68 C75.7366996,2.38620653 74.7225456,2.50252526 73.88,3 C68.86,5.46 65.13,10 61.74,14.48 C58.46,19.27 56.17,23.47 55.64,28.41 C55.3913825,29.8536277 55.9992395,31.3109257 57.2,32.15 C59,33.2 61,31.83 62.3,30.73 C63.9596947,29.2360657 65.3352102,27.453994 66.36,25.47 C67.71,22.81 68.05,20.06 67.05,19.73 C65.89,19.37 64.86,20.62 64.34,21.37 C63.5076928,22.5134723 62.9530509,23.8350264 62.72,25.23 C60.9933306,26.0511507 59.4467912,27.2068065 58.17,28.63 C58.3550417,26.8649564 58.8279703,25.1421449 59.57,23.53 C60.97,20.37 63.64,18.17 66.37,17.93 C67.2033403,17.844637 68.0015837,18.2876621 68.37,19.04 C69.1,20.55 68.63,22.53 68.21,23.92 C66.5610887,28.4989812 63.2771644,32.3064812 58.99,34.61 C57.18,35.33 54.61,35.77 52.67,33.77 C50.4,31.39 50.68,27.45 51.61,24.77 C52.82,20.79 55.09,16.77 58.75,12.1 C63.73,6.15 68.38,2.71 73.38,1.31 C74.77,1 76.66,0.86 77.83,2.09 L79,1.69 C81.7499318,0.714162983 84.7889138,0.988109684 87.32,2.44 Z M77.4,4.27 L77.36,4.27 C77.3989369,4.0651673 77.3989369,3.8548327 77.36,3.65 C74.2504328,5.34102794 71.7679525,7.98830557 70.28,11.2 C69.22,13.66 70.41,13.96 71.1,13.82 C72.25,13.55 76.88,10.12 77.4,4.27 Z"
                        />
                      </g>
                      <g>
                        <polygon
                          className="colored"
                          points="52.66 12.82 55.93 12.82 57.78 9.88 54.51 9.88"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M35.94,19.55 C35.3618125,20.566518 34.895746,21.6428298 34.55,22.76 C33.67,25.76 34.86,26.43 35.61,26.66 C37.88,27.31 40.61,24.08 40.61,24.08 C40.54,25.08 40.34,25.94 41.43,26.61 C42.444959,26.8280091 43.5037523,26.5660776 44.3,25.9 C47.16,23.9 49.46,20.84 51.3,18.17 L50.11,18.17 C50.11,18.17 47.19,22.31 45.29,23.17 C45.29,23.17 44.95,23.34 44.75,23.17 C44.55,23 44.6,22.54 44.75,22.24 L52.05,9.81 L48.61,9.81 L48.2,10.45 C48.2,10.45 48.13,10.33 48.09,10.28 C45.95,7.38 41.09,11.83 37.48,17 C36.9189915,17.8202798 36.4048367,18.67164 35.94,19.55 Z M42.63,19.94 C42.63,19.94 42.11,20.72 42.11,20.72 C41.4625599,21.825986 40.543558,22.7484299 39.44,23.4 C39.2275224,23.4691287 38.9959265,23.4474166 38.8,23.34 C38.5827558,23.200212 38.4689116,22.945044 38.51,22.69 C38.58,21.85 39.51,19.28 42.15,15.69 C42.82,14.78 44.77,12.35 45.24,11.93 C46.84,10.56 47.48,11.16 47.54,11.59 C46.05,14.24 44.28,17.24 42.63,19.94 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M24.74,17.26 C25.3240586,17.1566543 25.9016814,17.019761 26.47,16.85 C26.47,16.85 24,21 24.21,23.07 C24.29,23.7 24.21,25.99 26.5,26.68 C29.5,27.18 31.96,24.87 34.1,22.82 C34.1,22.82 34.47,22.48 34.67,22.28 L37.48,17.07 C36.038882,19.1959455 34.361516,21.1517542 32.48,22.9 C32.48,22.9 29.74,25.36 28.57,23.59 C28.2194153,22.7829713 28.2014474,21.8702006 28.52,21.05 C29.7583704,17.4147293 31.96407,14.1856957 34.9,11.71 C35.4227978,11.1861125 36.1921725,10.9937688 36.9,11.21 C37.2779691,11.4780759 37.3674595,12.0015945 37.1,12.38 C36.5339794,12.3359274 35.9774746,12.5446167 35.58,12.95 C34.8638168,13.5051453 34.5423361,14.4303824 34.76,15.31 C35.99,17.03 38.45,13.63 38.33,11.55 C38.2941662,10.8174123 37.9019498,10.1487767 37.28,9.76 C36.2790097,9.29038479 35.1209903,9.29038479 34.12,9.76 C32.5207345,10.5628364 31.088651,11.6623508 29.9,13 C28.52,14.5 26.15,16.16 25.41,16 C25.2361729,16.2736645 25.0028396,16.7203312 24.71,17.34 L24.74,17.26 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M25.55,9.77 C23.48,8.44 19.32,11 16,15.35 C12.95,19.26 11.64,23.81 13.07,25.91 C15.2,28.38 19.15,24.78 20.83,22.86 L21.04,22.63 C22.1361323,21.4001613 23.1013288,20.0596107 23.92,18.63 L24.74,17.3 L25.41,15.97 C25.65,15.3 27.65,11.28 25.55,9.77 Z M23.41,17.41 L21.91,19.81 C21.0155685,21.170934 19.8389801,22.3236496 18.46,23.19 C18.05,23.33 17.46,23.42 17.17,23.05 C16.55,22.32 16.87,21.3 17.17,20.48 L17.27,20.19 C18.0575497,18.2648069 19.0965818,16.4523853 20.36,14.8 L20.42,14.8 C21.1061231,15.95285 22.2267517,16.7816107 23.53,17.1 C23.5150327,17.1485671 23.4750327,17.2519004 23.41,17.41 Z M24.83,14.47 C24.83,14.47 24.17,15.97 24.17,15.97 C24.17,15.97 23.92,15.97 23.75,15.97 L23.45,15.92 C22.6071624,15.7181398 21.9162926,15.1168963 21.6,14.31 C21.3,12.9 22.53,11.8 23.07,11.4 C23.5805976,10.9962798 24.2792431,10.926025 24.86,11.22 C25.1402732,11.5667412 25.282708,12.0047283 25.26,12.45 C25.224558,13.1418579 25.0794153,13.8236909 24.83,14.47 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M42.86,31.53 C38.8,28.97 33.3,28.53 24.42,30.93 C15,33.12 11.8,34.51 7.66,31.71 C6.06,30.33 5.49,28.11 5.92,24.91 C6.92,19.7 9.58,14.68 14.32,9.12 C17,6.23 19.43,3.74 22.67,2.74 C25.16,2.12 24.93,4.03 24.67,4.31 C24.2267161,4.29934141 23.7885199,4.40630269 23.4,4.62 C22.6882227,5.13962789 22.2188228,5.92677537 22.1,6.8 C22.03,8.49 23.82,8.14 24.59,7.21 C25.36,6.28 26.64,4.21 25.68,2.29 C25.2274971,1.59650998 24.4992572,1.13043647 23.68,1.01 C20.68,0.85 17.94,2.24 15.39,3.77 C9.89966001,7.45488467 5.54093702,12.5925693 2.8,18.61 C1.34,22.1 2.22044605e-15,27.08 2,31.14 C3.53,33.96 6.7,35.45 10.49,35.14 C13.1862387,34.7579933 15.8575578,34.2170512 18.49,33.52 C20.65,33.01 31.7,29.28 35.33,35.77 C36.2307332,34.2994966 37.8356004,33.4079038 39.56,33.42 C42.6592513,33.2947014 45.712363,34.2021931 48.24,36 C46.6965225,34.2326247 44.8802383,32.7235558 42.86,31.53 Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="IndexLogos-wrapper IndexLogos-second-line">
                <div className="IndexLogos-place IndexLogos-place--6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 160 50"
                    fill="none"
                  >
                    <g transform="translate(20 16)">
                      <g>
                        <path
                          className="colored"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.2213 18.5815C12.4663 18.711 12.7806 18.6971 12.9978 18.503L13.0071 18.5122C13.6634 17.9298 14.856 16.8898 15.5262 16.3305C15.7943 16.1086 15.7481 15.7527 15.5355 15.4569C15.471 15.3677 15.4062 15.2803 15.3418 15.1935C14.8051 14.4703 14.2967 13.785 14.2967 12.4108V7.28933C14.2967 7.11437 14.2977 6.94056 14.2987 6.76807C14.3099 4.80317 14.3202 3.00879 12.8499 1.63628C11.588 0.42525 9.49877 0 7.89947 0C4.77481 0 1.28499 1.16482 0.55005 5.02904C0.476093 5.44041 0.771919 5.65767 1.04001 5.71775L4.22938 6.0598C4.5252 6.04594 4.74245 5.75473 4.79792 5.4589C5.07063 4.12769 6.18923 3.48519 7.44186 3.48519C8.11671 3.48519 8.88401 3.7348 9.28615 4.34032C9.69679 4.94591 9.69054 5.75251 9.68494 6.4762C9.6843 6.55895 9.68366 6.64062 9.68366 6.72079V7.14604C9.37598 7.18114 9.05298 7.21418 8.72011 7.24824C6.9927 7.42498 4.99962 7.6289 3.50368 8.28774C1.44677 9.17521 0 10.9918 0 13.6588C0 17.0747 2.15398 18.7803 4.9181 18.7803C7.25697 18.7803 8.53271 18.2302 10.3354 16.3906C10.4305 16.5274 10.5154 16.6531 10.5953 16.7714C11.0202 17.4003 11.3031 17.819 12.2213 18.5815ZM9.6838 10.6671C9.68373 10.6093 9.68366 10.5512 9.68366 10.4926V9.78073C7.30781 9.78073 4.79792 10.2892 4.79792 13.0903C4.79792 14.5093 5.53286 15.4708 6.79474 15.4708C7.71919 15.4708 8.54658 14.9022 9.0689 13.9778C9.68639 12.8927 9.6852 11.8708 9.6838 10.6671Z"
                          fill="#B2C0D6"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M56.082 18.503C55.8648 18.6971 55.5505 18.711 55.3055 18.5815C54.3771 17.8105 54.0949 17.391 53.6638 16.7503C53.5885 16.6383 53.5083 16.5192 53.4196 16.3906C51.6169 18.2302 50.3365 18.7803 48.0023 18.7803C45.2336 18.7803 43.0842 17.0747 43.0842 13.6588C43.0842 10.9918 44.5264 9.17521 46.5879 8.28774C48.0838 7.6289 50.0769 7.42498 51.8043 7.24824C52.1372 7.21418 52.4602 7.18114 52.7679 7.14604V6.72079C52.7679 6.64126 52.7685 6.56024 52.7691 6.47815C52.7747 5.75397 52.7809 4.94646 52.3657 4.34032C51.9682 3.7348 51.2009 3.48519 50.5214 3.48519C49.2688 3.48519 48.1548 4.12769 47.8821 5.4589C47.8267 5.75473 47.6094 6.04594 47.309 6.0598L44.1242 5.71775C43.8561 5.65767 43.5557 5.44041 43.6343 5.02904C44.3646 1.16482 47.859 0 50.9837 0C52.583 0 54.6722 0.42525 55.9341 1.63628C57.4044 3.00879 57.3941 4.80318 57.3829 6.76808C57.3819 6.94057 57.3809 7.11438 57.3809 7.28933V12.4108C57.3809 13.785 57.8893 14.4703 58.426 15.1935C58.4904 15.2803 58.5552 15.3677 58.6197 15.4569C58.8277 15.7527 58.8739 16.1086 58.6058 16.3305C57.9356 16.8898 56.743 17.9298 56.0866 18.5122L56.082 18.503ZM52.768 10.6671C52.7694 11.8708 52.7706 12.8927 52.1531 13.9778C51.6308 14.9022 50.7988 15.4708 49.8789 15.4708C48.6171 15.4708 47.8775 14.5093 47.8775 13.0903C47.8775 10.2892 50.3874 9.78073 52.7679 9.78073L52.768 10.6671Z"
                          fill="#B2C0D6"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M18.6878 18.5492H21.9743C22.3256 18.5492 22.6075 18.2765 22.6075 17.939V8.99957L22.6073 8.78683C22.6041 6.8587 22.5999 4.34956 24.8771 4.34956C26.9731 4.34956 26.9373 6.58199 26.9082 8.39972C26.9049 8.60632 26.9016 8.80757 26.9016 8.99957L26.9063 17.939C26.9063 18.2626 27.1651 18.5261 27.4979 18.5492H30.7797C31.131 18.5492 31.413 18.2765 31.413 17.939V8.99957C31.413 8.95769 31.4129 8.91492 31.4128 8.87135C31.4127 8.83751 31.4127 8.80318 31.4126 8.76841C31.4102 7.82492 31.4069 6.55274 31.718 5.7686C32.0555 4.9181 32.8875 4.38654 33.6825 4.38654C34.6347 4.38654 35.3696 4.70548 35.6146 5.83793C35.7411 6.38113 35.7239 7.63709 35.7123 8.47766C35.7095 8.68098 35.7071 8.86092 35.7071 8.99957V17.939C35.7071 18.2626 35.9705 18.5261 36.2987 18.5492H39.5805C39.9318 18.5492 40.2138 18.2765 40.2138 17.939L40.2184 7.29395C40.2184 7.03447 40.2228 6.76976 40.2272 6.50246C40.2536 4.90814 40.2816 3.2212 39.391 2.00607C38.4712 0.730319 36.9643 0.16178 35.5869 0.16178C33.6501 0.16178 31.8428 1.15557 31.0478 3.28644C30.1234 1.15557 28.8384 0.16178 26.7814 0.16178C24.7569 0.16178 23.2547 1.15557 22.455 3.28644H22.3949V1.08161C22.3718 0.776542 22.1176 0.531553 21.7986 0.517696H18.7341C18.3828 0.517696 18.1008 0.78579 18.1008 1.12322V17.9899C18.1239 18.2903 18.3735 18.5261 18.6878 18.5492Z"
                          fill="#B2C0D6"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M61.3792 3.49444V1.08161C61.3792 0.716453 61.6565 0.471472 61.9893 0.471472H72.7915C73.1382 0.471472 73.4156 0.721076 73.4156 1.08161V3.14777C73.4109 3.49444 73.1197 3.94742 72.602 4.66387L67.0045 12.6558C69.0845 12.6049 71.2801 12.9146 73.166 13.9778C73.5912 14.2181 73.7068 14.5694 73.7391 14.9161V17.4907C73.7391 17.842 73.3509 18.2534 72.9441 18.0407C69.6207 16.2981 65.2064 16.1086 61.5317 18.0592C61.1573 18.2626 60.7644 17.8558 60.7644 17.5045V15.0594C60.7644 14.6665 60.769 13.9962 61.1619 13.4L67.647 4.09996H62.0032C61.6565 4.09996 61.3792 3.85498 61.3792 3.49444Z"
                          fill="#B2C0D6"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M61.2746 21.8454C63.2782 21.6078 67.6607 21.0879 68.442 22.0898C69.2319 23.1015 67.5657 27.2619 66.8209 29.1217L66.8196 29.1249C66.5931 29.6889 67.0784 29.9153 67.5869 29.4901C70.901 26.7214 71.7515 20.9204 71.0767 20.0838C70.4018 19.2518 64.6148 18.5353 61.088 21.0175C60.5425 21.3965 60.635 21.9234 61.2405 21.8495L61.2746 21.8454Z"
                          fill="#B2C0D6"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M43.0611 32C50.7618 32 59.7059 29.5733 65.8766 25.025C66.8982 24.2669 66.0246 23.1391 64.9799 23.5828C58.065 26.518 50.5446 27.9324 43.7082 27.9324C33.5716 27.9324 23.7585 25.1544 15.822 20.5368C15.1287 20.13 14.611 20.8418 15.1888 21.3641C22.5428 28.0064 32.2635 32 43.0611 32Z"
                          fill="#B2C0D6"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M82.7156 0.16178C87.5921 0.16178 90.2314 4.34956 90.2314 9.67442C90.2314 14.819 87.3147 18.9005 82.7156 18.9005C77.9269 18.9005 75.3199 14.7127 75.3199 9.49415C75.3199 4.24325 77.9593 0.16178 82.7156 0.16178ZM82.7433 3.60538C80.3212 3.60538 80.1687 6.90568 80.1687 8.96259L80.1687 9.0383C80.1683 11.1298 80.1675 15.4245 82.7156 15.4245C85.2625 15.4245 85.3826 11.8746 85.3826 9.71139C85.3826 8.28774 85.3225 6.58674 84.8927 5.23703C84.5229 4.06298 83.7879 3.60538 82.7433 3.60538Z"
                          fill="#B2C0D6"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M93.2821 18.5492H96.5547C96.906 18.5492 97.1925 18.2765 97.1972 17.939V8.85628C97.1972 7.7192 97.2572 6.69305 97.7195 5.66228C98.0846 4.84877 98.8196 4.31258 99.6192 4.31258C101.714 4.31258 101.694 6.61203 101.679 8.41635C101.677 8.56699 101.676 8.71417 101.676 8.85628V18.0176C101.708 18.3042 101.958 18.5261 102.259 18.5492H105.554C105.878 18.5492 106.151 18.3134 106.187 18.0176V7.40026C106.187 5.7686 106.187 3.49906 105.328 2.14936C104.403 0.693342 102.966 0.16178 101.491 0.16178C99.2217 0.16178 97.9321 1.26188 97.0123 3.56839H96.9522V0.989168C96.8875 0.725698 96.6517 0.531553 96.3652 0.517696H93.3191C92.9863 0.517696 92.7136 0.758053 92.6858 1.06775L92.6904 17.939C92.6904 18.2626 92.9539 18.5261 93.2821 18.5492Z"
                          fill="#B2C0D6"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="IndexLogos-place IndexLogos-place--7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 120 45"
                    fill="none"
                  >
                    <g transform="translate(20 5)">
                      <g>
                        <path
                          className="colored"
                          d="M5.4,12.6c0-0.8,0.8-1.2,1.9-1.2c1.9,0,3.7,0.6,5.4,1.5V7.7C11,7,9.1,6.7,7.3,6.6C3,6.6,0,8.9,0,12.8   c0,5.9,8.1,4.9,8.1,7.6c0,0.9-0.8,1.4-2,1.4C4,21.6,2,21,0.3,20v5.1c1.8,0.8,3.8,1.2,5.8,1.2c4.5,0,7.4-2.2,7.4-6.1   C13.6,13.8,5.4,15,5.4,12.6z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M20.7,2.6l-5.3,1.1v17c-0.1,3,2.3,5.5,5.2,5.5c0.1,0,0.2,0,0.3,0c1.3,0.1,2.6-0.2,3.8-0.7v-4.3   c-0.7,0.3-4.1,1.2-4.1-1.9v-7.7h4.1V7h-4.1V2.6z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M32,8.6L31.9,7H27v18.9h5.4V13.1c1.1-1.2,2.8-1.6,4.3-1.1V7C35,6.4,33,7.1,32,8.6z"
                        />
                      </g>
                      <g>
                        <rect
                          className="colored"
                          x={39}
                          y={7}
                          width="5.4"
                          height="18.9"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M44.4,0v4.5L39,5.5V1.1L44.4,0z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M56.3,6.6c-1.6,0-3.1,0.6-4.2,1.8L52,7h-4.9v25l5.4-0.9V25c1.1,0.9,2.4,1.3,3.8,1.3c3.9,0,7.4-3.1,7.4-10   C63.6,10.1,60.1,6.6,56.3,6.6z M55,21.5c-1,0.1-1.9-0.3-2.6-1.1v-8c0.6-0.8,1.6-1.2,2.6-1.1c2,0,3.4,2.2,3.4,5   C58.3,19.3,57,21.5,55,21.5z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M81.1,16.5c0-5.5-2.7-9.9-7.8-9.9c-5.1,0-8.2,4.3-8.2,9.9c0,6.5,3.6,9.7,8.9,9.7c2.1,0.1,4.1-0.4,5.9-1.5v-4.2   c-1.6,0.9-3.4,1.3-5.3,1.2c-2.2,0-3.9-0.8-4.2-3.4H81C81.1,17.8,81.2,17.2,81.1,16.5z M70.5,14.5c0-2.4,1.5-3.4,2.8-3.4   c1.4,0,2.7,0.9,2.7,3.4H70.5z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="IndexLogos-place IndexLogos-place--8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 120 50"
                    fill="none"
                  >
                    <g transform="translate(20 0)">
                      <g>
                        <path
                          className="colored"
                          d="M21.8,22.9A1.771,1.771,0,0,1,20,21.2V1.7A1.71,1.71,0,0,1,21.8,0a1.774,1.774,0,0,1,1.8,1.7V21.2A1.839,1.839,0,0,1,21.8,22.9Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M10,17.6a1.923,1.923,0,0,0,1.8,1.7,1.839,1.839,0,0,0,1.8-1.7v-9a1.71,1.71,0,0,0-1.8-1.7A1.774,1.774,0,0,0,10,8.6Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M1.1,19.1A1.878,1.878,0,0,1,0,17.5v-4a1.8,1.8,0,0,1,3.6,0v4A1.425,1.425,0,0,1,3,18.7,1.679,1.679,0,0,1,1.1,19.1Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M32.2,40.3v3.3h.2c.8.1,1.5.2,2.3.3a6.7,6.7,0,0,0,2,0,5.847,5.847,0,0,0,1.9-.4,5.64,5.64,0,0,0,2-1.1,4.345,4.345,0,0,0,1.2-1.7,4.685,4.685,0,0,0,0-3.3,3.587,3.587,0,0,0-1-1.4,4.617,4.617,0,0,0-1.5-.9l-2.5-.9a1.575,1.575,0,0,1-.7-.7,1.1,1.1,0,0,1,0-.8.215.215,0,0,1,.2-.2,1.38,1.38,0,0,1,.4-.3l.9-.3a4.3,4.3,0,0,1,1.6,0c.6.1,1.2.2,1.9.3h.1V29.1L41,29a12.5,12.5,0,0,0-1.9-.3,10.454,10.454,0,0,0-2.5,0,6.467,6.467,0,0,0-2.9,1.1,2.982,2.982,0,0,0-1.2,1.7,4.154,4.154,0,0,0,0,3.1,3.045,3.045,0,0,0,.9,1.3,4.44,4.44,0,0,0,1.1.8,8.651,8.651,0,0,0,1.7.7c.2.1.4.1.6.2l.3.1h.1a2.177,2.177,0,0,1,.8.5,1,1,0,0,1,.4.5v.6a1.344,1.344,0,0,1-.6.7,1.689,1.689,0,0,1-1,.3,7.569,7.569,0,0,1-1.5.1,5.822,5.822,0,0,1-1.9-.3c-.3-.1-.7-.1-1-.2Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M23.6,43.7h3.7V29.2H23.6Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M72.3,30.2a7.584,7.584,0,0,0-7.7-.2,7.464,7.464,0,0,0-4,6.5,7.686,7.686,0,0,0,9.3,7.4,7.461,7.461,0,0,0,5.9-6A7.648,7.648,0,0,0,72.3,30.2Zm-.2,7a3.854,3.854,0,0,1-3,3,3.7,3.7,0,0,1-3.2-.7,3.749,3.749,0,0,1-1.4-3,3.628,3.628,0,0,1,2.1-3.3,3.7,3.7,0,0,1,3.8.1A3.782,3.782,0,0,1,72.1,37.2Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M18.6,39.6v3.9l-.3.1a10.205,10.205,0,0,1-5.2.2A7.468,7.468,0,0,1,9,41.2a7.8,7.8,0,0,1,.1-9.4,7.268,7.268,0,0,1,2.6-2,8.7,8.7,0,0,1,3.1-.7,8.279,8.279,0,0,1,3.5.5h.2v3.9h-.1a6.655,6.655,0,0,0-3.7-.7,4.958,4.958,0,0,0-2,.8,3.219,3.219,0,0,0-1.2,2,3.6,3.6,0,0,0,.1,2.3,2.982,2.982,0,0,0,1.2,1.7,4.019,4.019,0,0,0,2.8.8,7.872,7.872,0,0,0,3-.8Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M56.8,43.5V39.6h-.1a6.812,6.812,0,0,1-2.8.7,4.019,4.019,0,0,1-2.8-.8,2.982,2.982,0,0,1-1.2-1.7,4.5,4.5,0,0,1-.1-2.3,3.738,3.738,0,0,1,1.2-2,2.973,2.973,0,0,1,2-.8,6.655,6.655,0,0,1,3.7.7h.1V29.5h-.2a10.236,10.236,0,0,0-3.5-.5,8.245,8.245,0,0,0-3.1.7,7.268,7.268,0,0,0-2.6,2,7.655,7.655,0,0,0-.1,9.4,7.468,7.468,0,0,0,4.1,2.6,9.22,9.22,0,0,0,5.2-.2Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M30,17.6a1.923,1.923,0,0,0,1.8,1.7,1.839,1.839,0,0,0,1.8-1.7v-9a1.71,1.71,0,0,0-1.8-1.7A1.774,1.774,0,0,0,30,8.6Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M41.1,19.1A1.878,1.878,0,0,1,40,17.5v-4a1.8,1.8,0,0,1,3.6,0v4a1.425,1.425,0,0,1-.6,1.2A1.679,1.679,0,0,1,41.1,19.1Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M50,17.6a1.923,1.923,0,0,0,1.8,1.7,1.839,1.839,0,0,0,1.8-1.7v-9a1.8,1.8,0,0,0-3.6,0Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M61.8,22.9A1.771,1.771,0,0,1,60,21.2V1.7A1.71,1.71,0,0,1,61.8,0a1.774,1.774,0,0,1,1.8,1.7V21.2A1.839,1.839,0,0,1,61.8,22.9Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M70,17.6a1.923,1.923,0,0,0,1.8,1.7,1.839,1.839,0,0,0,1.8-1.7v-9a1.71,1.71,0,0,0-1.8-1.7A1.774,1.774,0,0,0,70,8.6Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M81,19.1a1.878,1.878,0,0,1-1.1-1.6v-4a1.8,1.8,0,1,1,3.6,0v4a1.425,1.425,0,0,1-.6,1.2A1.679,1.679,0,0,1,81,19.1Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="IndexLogos-place IndexLogos-place--9">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 50">
                    <g transform="translate(38 10)">
                      <g>
                        <path
                          className="colored"
                          d="M75.7,12.4c-0.8,0.9-1.3,2.2-1.3,3.7v11.4h-4v-20h3.9v2.5c0.5-0.8,1.1-1.5,1.9-1.9c0.8-0.5,1.7-0.7,2.8-0.7h1.4V11h-1.7C77.6,11,76.6,11.5,75.7,12.4z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M48.8,13.5c0.5-1.3,1.2-2.4,2.2-3.3s2-1.7,3.3-2.3c1.3-0.6,2.6-0.8,4.1-0.8c1.4,0,2.8,0.3,4,0.8c1.2,0.5,2.3,1.3,3.2,2.2c0.9,0.9,1.6,2,2.1,3.3c0.5,1.3,0.7,2.7,0.7,4.1v1.3H52c0.1,0.8,0.4,1.6,0.8,2.3c0.4,0.7,0.9,1.3,1.5,1.8c0.6,0.5,1.3,0.9,2,1.2c0.7,0.3,1.5,0.4,2.4,0.4c2.4,0,4.3-1,5.8-2.9l2.9,2.1c-1,1.3-2.2,2.4-3.7,3.1c-1.5,0.8-3.1,1.1-5,1.1c-1.5,0-2.9-0.3-4.2-0.8c-1.3-0.5-2.4-1.3-3.4-2.2c-1-0.9-1.7-2.1-2.3-3.3C48.3,20.4,48,19,48,17.5C48,16.1,48.2,14.7,48.8,13.5zM54.3,11.9c-1.1,0.9-1.9,2.2-2.2,3.7h12.2c-0.3-1.5-1.1-2.8-2.2-3.7c-1.1-0.9-2.4-1.4-3.9-1.4C56.7,10.5,55.4,11,54.3,11.9z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M28.9,0v10c0.9-0.9,2-1.6,3.2-2.2C33.3,7.3,34.6,7,36,7c1.5,0,2.8,0.3,4.1,0.8c1.3,0.6,2.4,1.3,3.3,2.2s1.7,2.1,2.2,3.3c0.6,1.3,0.8,2.6,0.8,4.1c0,1.4-0.3,2.8-0.8,4.1c-0.6,1.3-1.3,2.4-2.2,3.3c-0.9,0.9-2.1,1.7-3.3,2.2C38.8,27.7,37.5,28,36,28c-1.4,0-2.7-0.3-3.9-0.8c-1.2-0.5-2.3-1.3-3.2-2.2v2.5h-3.9V0H28.9z M29.3,20.2c0.4,0.8,0.8,1.6,1.5,2.2s1.4,1.1,2.2,1.5c0.8,0.4,1.7,0.6,2.7,0.6c0.9,0,1.8-0.2,2.7-0.6s1.6-0.9,2.2-1.5c0.6-0.6,1.1-1.4,1.5-2.2c0.4-0.8,0.6-1.7,0.6-2.7s-0.2-1.9-0.6-2.7c-0.4-0.9-0.9-1.6-1.5-2.2c-0.6-0.6-1.3-1.1-2.2-1.5c-0.8-0.4-1.7-0.5-2.7-0.5s-1.8,0.2-2.7,0.5c-0.8,0.4-1.6,0.8-2.2,1.5c-0.6,0.6-1.1,1.4-1.5,2.2c-0.4,0.9-0.6,1.8-0.6,2.7C28.8,18.5,29,19.4,29.3,20.2z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M4.6,20c0.3,0.9,0.8,1.7,1.4,2.3c0.6,0.6,1.3,1.1,2.1,1.5c0.8,0.3,1.7,0.5,2.7,0.5c0.9,0,1.8-0.2,2.7-0.5c0.8-0.4,1.5-0.9,2.2-1.5c0.6-0.6,1.1-1.4,1.4-2.3c0.3-0.9,0.5-1.9,0.5-3V0h4.1v27.5h-4.1V25c-0.9,1-2,1.7-3.2,2.2c-1.2,0.5-2.6,0.8-4,0.8c-1.5,0-2.8-0.3-4.1-0.8C5,26.7,3.9,26,3,25c-0.9-0.9-1.7-2.1-2.2-3.4C0.3,20.3,0,18.8,0,17.2V0h4.1v17C4.1,18.1,4.3,19.1,4.6,20z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="IndexLogos-place IndexLogos-place--10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80 60"
                    fill="none"
                  >
                    <g transform="translate(20 5)">
                      <g>
                        <path
                          className="colored"
                          d="M20.7,0C12.7,0,5.7,1.5,0,4.6v24.3c-0.2,4.8,1.9,9.3,5.6,12.4c3.4,2.8,13.8,7.3,15.1,7.9  c1.2-0.5,11.8-5.2,15.1-7.9c3.7-3,5.7-7.6,5.6-12.4V4.6C35.6,1.5,28.6,0,20.7,0z M32.5,4.7c2.4,0,4.7,0.2,7,0.4v23.8  c0.2,4.2-1.6,8.2-4.9,10.9c-2.9,2.4-11.5,6.2-13.9,7.3c-2.4-1.1-11.1-5-13.9-7.3c-3.2-2.7-5-6.7-4.9-10.9V15  C11,6.6,22.2,4.6,32.5,4.7L32.5,4.7z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M3.7,16.2v11.3c0,3.8,1.8,5.7,5.4,5.7c1.9,0.1,3.8-0.4,5.4-1.4V16.2h-3.6v13.5c-0.5,0.3-1.1,0.5-1.7,0.4  c-1.6,0-1.9-1.5-1.9-2.5V16.2H3.7z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M21.2,15.8L21.2,15.8c-1.7-0.1-3.4,0.4-4.8,1.3v23.4h3.6v-7.6c0.5,0.1,1.1,0.2,1.6,0.2c4,0,6.3-3.6,6.3-8.8  C27.8,19,25.5,15.8,21.2,15.8z M21.1,30.2c-0.4,0-0.8-0.1-1.2-0.2V19c0.4-0.2,0.8-0.3,1.3-0.3v0c2.1,0,3,1.7,3,5.7  C24.1,28.3,23.1,30.2,21.1,30.2z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M33.5,15.8c-2.6,0-4.8,2.1-4.8,4.7c0,1.9,0.5,3.3,3.5,5.1c1.6,0.9,2.2,1.5,2.2,2.7c0.1,1.1-0.8,2-1.8,2  c-0.1,0-0.2,0-0.3,0c-1.3-0.1-2.5-0.6-3.4-1.5V32c1.2,0.7,2.6,1.1,4,1.1c2.7,0.2,5-1.8,5.2-4.5c0-0.1,0-0.2,0-0.3  c0.1-2.1-0.5-3.7-3.5-5.4c-1.3-0.8-2.4-1.3-2.4-2.6c0-1.3,1.1-1.7,2.1-1.7c1.2,0.1,2.4,0.6,3.2,1.5v-3.1  C36.3,16.1,34.9,15.7,33.5,15.8z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="IndexLogos-wrapper IndexLogos-third-line">
                <div className="IndexLogos-place IndexLogos-place--11">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 50">
                    <g transform="translate(16 8)">
                      <g>
                        <path
                          className="colored"
                          d="M130,19.5 L130,17.5 C130,12.6 127.5,9.2 122.2,9.2 C117.2,9.2 113.4,13 113.4,18.7 C113.4,24.4 117.3,28 122.9,28 C125.2,28 127.7,27.5 129.3,26.3 L129.3,22.8 C127.5,24 125.7,24.5 123.2,24.5 C120.4,24.5 117.6,22.8 117.3,19.5 L117.3,19.4 L130,19.4 L130,19.5 Z M122.1,12.6 C124.7,12.6 126.1,14.1 126.2,16.9 L117.5,16.9 C118,14.2 119.7,12.6 122.1,12.6 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M105.8,16.8 C103.7,16.2 102.9,15.6 102.9,14.4 C102.9,13.2 103.8,12.4 105.6,12.4 C107.5,12.4 109.1,13.1 110.7,14.2 L110.7,10.5 C109.2,9.6 107.5,9.1 105.5,9.1 C101.8,9.1 99,10.9 99,14.5 C99,17.6 100.6,19.1 104.4,20 C106.7,20.6 107.8,21.1 107.8,22.6 C107.8,24 106.6,24.6 104.8,24.6 C102.9,24.6 100.9,23.8 99.2,22.6 L99.2,26.4 C100.6,27.3 102.7,27.9 104.8,27.9 C108.7,27.9 111.7,26.2 111.7,22.4 C111.8,19.3 110,17.7 105.8,16.8 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M89.5,9.2 C87.2,9.2 85.2,9.8 83.6,10.7 L83.6,14.2 C85.1,13.3 86.8,12.7 88.9,12.7 C90.9,12.7 92.4,13.6 92.4,15.5 L92.4,17 L90.4,17 C85.1,17 82,18.8 82,22.4 C82,26.5 85.5,27.9 90.2,27.9 C92.3,27.9 94.7,27.6 96.4,27.2 L96.4,15.3 C96.3,10.8 93.5,9.2 89.5,9.2 Z M92.3,24.8 C91.6,24.9 90.7,25 90.1,25 C87.6,25 85.9,24.3 85.9,22.4 C85.9,20.6 87.8,19.8 90.6,19.8 L92.3,19.8 L92.3,24.8 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M71.3,9.2 C69.7,9.2 68,9.6 67.1,10.1 L67.1,0 L63,0 L63,26.8 C64.9,27.4 67.2,28 69.8,28 C76.5,28 80.4,24.1 80.4,18.3 C80.6,12.5 76.6,9.2 71.3,9.2 Z M70,24.6 C69,24.6 67.9,24.5 67.2,24.2 L67.2,13.7 C68,13.3 69.3,12.8 70.9,12.8 C74,12.8 76.5,14.9 76.5,18.4 C76.4,22.5 73.8,24.6 70,24.6 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M52.1,9.2 C49.4,9.2 46.3,9.8 43.8,10.7 L43.8,27.5 L47.9,27.5 L47.9,13.4 C49,13.1 50.4,12.9 51.8,12.9 C54.1,12.9 55.7,13.8 55.7,16.4 L55.7,27.6 L59.7,27.6 L59.7,16 C59.7,11 56.7,9.2 52.1,9.2 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M36.1,9.6 L40.2,9.6 L40.2,27.6 L36.1,27.6 L36.1,9.6 Z M38.1,6.7 C36.8,6.7 35.6,5.5 35.6,4.1 C35.6,2.7 36.7,1.6 38.1,1.6 C39.5,1.6 40.7,2.7 40.7,4.1 C40.7,5.6 39.5,6.7 38.1,6.7 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M24.1,9.2 C18.7,9.2 14.7,13 14.7,18.6 C14.7,24.2 18.6,28 24.1,28 C29.6,28 33.5,24.2 33.5,18.6 C33.5,13 29.6,9.2 24.1,9.2 Z M24.1,24.6 C21.1,24.6 18.8,22.3 18.8,18.7 C18.8,15 21,12.7 24.1,12.7 C27.2,12.7 29.4,15 29.4,18.7 C29.4,22.2 27.2,24.6 24.1,24.6 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M10.1,24.5 C6.6,24.5 4.1,22.2 4.1,18.7 C4.1,14.9 6.6,12.9 9.9,12.9 C10.9,12.9 11.8,13.1 12.7,13.4 C13.1,12.3 13.7,11.4 14.4,10.5 C12.9,9.7 11.4,9.3 9.5,9.3 C4.2,9.2 0,12.8 0,18.6 C0,24.4 4,28 9.6,28 C11.5,28 13.2,27.6 14.8,26.7 C14.1,25.9 13.4,24.9 13,23.9 C12.1,24.3 11.1,24.5 10.1,24.5 Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="IndexLogos-place IndexLogos-place--12">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 50">
                    <g transform="translate(38 10)">
                      <g>
                        <path
                          className="colored"
                          d="M75.7,12.4c-0.8,0.9-1.3,2.2-1.3,3.7v11.4h-4v-20h3.9v2.5c0.5-0.8,1.1-1.5,1.9-1.9c0.8-0.5,1.7-0.7,2.8-0.7h1.4V11h-1.7C77.6,11,76.6,11.5,75.7,12.4z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M48.8,13.5c0.5-1.3,1.2-2.4,2.2-3.3s2-1.7,3.3-2.3c1.3-0.6,2.6-0.8,4.1-0.8c1.4,0,2.8,0.3,4,0.8c1.2,0.5,2.3,1.3,3.2,2.2c0.9,0.9,1.6,2,2.1,3.3c0.5,1.3,0.7,2.7,0.7,4.1v1.3H52c0.1,0.8,0.4,1.6,0.8,2.3c0.4,0.7,0.9,1.3,1.5,1.8c0.6,0.5,1.3,0.9,2,1.2c0.7,0.3,1.5,0.4,2.4,0.4c2.4,0,4.3-1,5.8-2.9l2.9,2.1c-1,1.3-2.2,2.4-3.7,3.1c-1.5,0.8-3.1,1.1-5,1.1c-1.5,0-2.9-0.3-4.2-0.8c-1.3-0.5-2.4-1.3-3.4-2.2c-1-0.9-1.7-2.1-2.3-3.3C48.3,20.4,48,19,48,17.5C48,16.1,48.2,14.7,48.8,13.5zM54.3,11.9c-1.1,0.9-1.9,2.2-2.2,3.7h12.2c-0.3-1.5-1.1-2.8-2.2-3.7c-1.1-0.9-2.4-1.4-3.9-1.4C56.7,10.5,55.4,11,54.3,11.9z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M28.9,0v10c0.9-0.9,2-1.6,3.2-2.2C33.3,7.3,34.6,7,36,7c1.5,0,2.8,0.3,4.1,0.8c1.3,0.6,2.4,1.3,3.3,2.2s1.7,2.1,2.2,3.3c0.6,1.3,0.8,2.6,0.8,4.1c0,1.4-0.3,2.8-0.8,4.1c-0.6,1.3-1.3,2.4-2.2,3.3c-0.9,0.9-2.1,1.7-3.3,2.2C38.8,27.7,37.5,28,36,28c-1.4,0-2.7-0.3-3.9-0.8c-1.2-0.5-2.3-1.3-3.2-2.2v2.5h-3.9V0H28.9z M29.3,20.2c0.4,0.8,0.8,1.6,1.5,2.2s1.4,1.1,2.2,1.5c0.8,0.4,1.7,0.6,2.7,0.6c0.9,0,1.8-0.2,2.7-0.6s1.6-0.9,2.2-1.5c0.6-0.6,1.1-1.4,1.5-2.2c0.4-0.8,0.6-1.7,0.6-2.7s-0.2-1.9-0.6-2.7c-0.4-0.9-0.9-1.6-1.5-2.2c-0.6-0.6-1.3-1.1-2.2-1.5c-0.8-0.4-1.7-0.5-2.7-0.5s-1.8,0.2-2.7,0.5c-0.8,0.4-1.6,0.8-2.2,1.5c-0.6,0.6-1.1,1.4-1.5,2.2c-0.4,0.9-0.6,1.8-0.6,2.7C28.8,18.5,29,19.4,29.3,20.2z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M4.6,20c0.3,0.9,0.8,1.7,1.4,2.3c0.6,0.6,1.3,1.1,2.1,1.5c0.8,0.3,1.7,0.5,2.7,0.5c0.9,0,1.8-0.2,2.7-0.5c0.8-0.4,1.5-0.9,2.2-1.5c0.6-0.6,1.1-1.4,1.4-2.3c0.3-0.9,0.5-1.9,0.5-3V0h4.1v27.5h-4.1V25c-0.9,1-2,1.7-3.2,2.2c-1.2,0.5-2.6,0.8-4,0.8c-1.5,0-2.8-0.3-4.1-0.8C5,26.7,3.9,26,3,25c-0.9-0.9-1.7-2.1-2.2-3.4C0.3,20.3,0,18.8,0,17.2V0h4.1v17C4.1,18.1,4.3,19.1,4.6,20z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="IndexLogos-place IndexLogos-place--13">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 50">
                    <g transform="translate(25 6)">
                      <g>
                        <path
                          className="colored"
                          d="M86.07,29.94 C85.846081,30.4955471 85.6915799,31.0766055 85.61,31.67 C85.15,34.86 86.83,35.35 88.12,35.11 C89.6079656,34.5139844 90.9364676,33.5792394 92,32.38 C91.75,33.31 91.82,34.97 93.16,35.14 C94.0275199,35.1890339 94.8835019,34.9226494 95.57,34.39 C98.42,32.87 101.85,27.79 102.73,26.32 L101.57,26.32 C100.31,28.19 98.7,30.64 96.68,31.8 C96.33,32.04 95.83,31.86 96.02,31.32 C96.6630682,29.8704488 97.4292059,28.4786877 98.31,27.16 L103.4,18.3 L99.91,18.3 L99.39,19.18 C99.1564644,18.8102475 98.8738926,18.4738526 98.55,18.18 C97.5817088,17.7286566 96.4498094,17.8041166 95.55,18.38 C91.8,20.53 89.06,24.79 86.9,28.1 C86.5829747,28.694317 86.3057,29.3089982 86.07,29.94 Z M92.07,30.85 L91.74,31.14 C91.26,31.56 90.74,32.01 90.17,31.79 C89.9992449,31.6997768 89.8834559,31.531696 89.86,31.34 C89.9375344,30.1384253 90.300951,28.9727495 90.92,27.94 L91.06,27.66 C92.6,25.14 94.39,22.16 97.06,20.1 C97.437689,19.7324508 97.9814423,19.5917594 98.49,19.73 C98.6363131,19.8496688 98.7296995,20.0220744 98.75,20.21 C98.7352402,20.3012138 98.7047899,20.3891812 98.66,20.47 C97.93,21.64 97.23,22.86 96.55,24.03 C95.2482427,26.423555 93.7497488,28.7047445 92.07,30.85 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M80.21,25.94 L79.76,27.26 C78.57,30.68 78.02,33.01 79.14,34.39 C80.75,36.33 83.41,34.32 85.57,31.66 L86.89,28.11 C86.89,28.11 84.62,31.8 83.36,32.11 C82.36,32.19 82.48,30.89 82.52,30.58 C82.9594121,28.4401566 83.6824624,26.3685334 84.67,24.42 C86.7091153,23.0383797 88.6351811,21.4968583 90.43,19.81 C93.4152587,17.0612844 96.0972486,14.0004635 98.43,10.68 C98.0405118,10.7530553 97.6460508,10.7965129 97.25,10.81 C94.11,15.1 87.69,21.34 85.74,22.27 C86.6,20.27 92.18,10.53 96.92,5.88 L97.66,5.18 C98.88,4 100.07,2.91 101,2.72 C101.09,2.72 101.22,2.72 101.33,2.95 C101.326797,3.73788508 101.097746,4.50833056 100.67,5.17 L100.15,6.23 C100.564867,6.15112948 100.975408,6.05099751 101.38,5.93 C102.118579,4.87370454 102.471637,3.59563682 102.38,2.31 C102.311879,1.87168055 101.97566,1.52345433 101.54,1.44 C100.12,1.18 98.54,2.21 97.34,3.04 C90.88,8 85.5,15 80.79,24.67 C80.2135748,24.9786204 79.5625832,25.120592 78.91,25.08 C78.59497,25.568838 78.4136782,25.954051 78.3007507,26.17 C78.9685099,26.1438151 79.5938773,26.0668983 80.21,25.94 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M78.91,25.08 C79.5008806,23.9492323 79.9509041,22.7502892 80.25,21.51 C80.3081277,21.1191625 80.3415274,20.7250456 80.35,20.33 C80.4171156,19.4763115 80.0390725,18.6483971 79.35,18.14 C78.4568487,17.7838627 77.4550362,17.8201603 76.59,18.24 C73.22,19.61 70.71,22.99 68.89,25.78 C67.7843942,27.5673053 67.0308554,29.5495875 66.67,31.62 C66.48,33.32 66.87,34.42 67.86,34.96 C68.7849257,35.2807406 69.8037407,35.1821456 70.65,34.69 C74.06,32.93 76.44,29.4 78.32,26.17 L78.91,25.08 Z M71,31.46 C70.8321569,31.205429 70.7482312,30.9046953 70.76,30.6 C70.76,28.68 72.83,25.25 74.31,23.38 C74.9538599,24.5350924 75.9737273,25.4349755 77.2,25.93 C76.17,28.24 72.55,33.18 71,31.46 Z M77.78,24.9 C76.6979164,24.6647441 75.8398113,23.8414271 75.56,22.77 C75.4043849,21.5240389 76.0599756,20.3174303 77.19,19.77 C77.6083329,19.4581609 78.1478109,19.3583944 78.65,19.5 C79.0369983,19.8100594 79.2372343,20.2974264 79.18,20.79 C79.1762644,21.124772 79.1495349,21.4588919 79.1,21.79 L79.1,21.86 C78.8051779,22.9239317 78.3749954,23.945615 77.82,24.9 L77.78,24.9 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M104.9,5 C106.790493,3.92924925 108.50963,2.58090674 110,1 C108.965583,3.02837949 107.553675,4.84078062 105.84,6.34 C103.2,8.66 98.59,11.1 94.2,10 C95,8.93 95.82,8 96.69,7 C99.5699486,7.22622364 102.44676,6.52541686 104.9,5 Z M87.32,2.44 C89,3.33 90.64,4.23 92.24,5.22 L93.24,5.81 C92.6,6.45 91.34,7.72 90.6,8.56 C89.09,7.92 84.6,4.54 82.49,3.86 C82.49,3.86 79.81,2.65 78.49,3.33 C78.49,3.57 78.49,3.88 78.49,4.11 C78.3791906,6.01725193 77.8354392,7.87421424 76.9,9.54 C75.44,11.85 73.66,14.37 70.9,15 C70.1814011,15.1393633 69.4547705,14.800269 69.1,14.16 C68.3,12.74 69.1,11.12 69.67,9.93 C71.2752797,6.90325963 73.7014305,4.3904606 76.67,2.68 C75.7366996,2.38620653 74.7225456,2.50252526 73.88,3 C68.86,5.46 65.13,10 61.74,14.48 C58.46,19.27 56.17,23.47 55.64,28.41 C55.3913825,29.8536277 55.9992395,31.3109257 57.2,32.15 C59,33.2 61,31.83 62.3,30.73 C63.9596947,29.2360657 65.3352102,27.453994 66.36,25.47 C67.71,22.81 68.05,20.06 67.05,19.73 C65.89,19.37 64.86,20.62 64.34,21.37 C63.5076928,22.5134723 62.9530509,23.8350264 62.72,25.23 C60.9933306,26.0511507 59.4467912,27.2068065 58.17,28.63 C58.3550417,26.8649564 58.8279703,25.1421449 59.57,23.53 C60.97,20.37 63.64,18.17 66.37,17.93 C67.2033403,17.844637 68.0015837,18.2876621 68.37,19.04 C69.1,20.55 68.63,22.53 68.21,23.92 C66.5610887,28.4989812 63.2771644,32.3064812 58.99,34.61 C57.18,35.33 54.61,35.77 52.67,33.77 C50.4,31.39 50.68,27.45 51.61,24.77 C52.82,20.79 55.09,16.77 58.75,12.1 C63.73,6.15 68.38,2.71 73.38,1.31 C74.77,1 76.66,0.86 77.83,2.09 L79,1.69 C81.7499318,0.714162983 84.7889138,0.988109684 87.32,2.44 Z M77.4,4.27 L77.36,4.27 C77.3989369,4.0651673 77.3989369,3.8548327 77.36,3.65 C74.2504328,5.34102794 71.7679525,7.98830557 70.28,11.2 C69.22,13.66 70.41,13.96 71.1,13.82 C72.25,13.55 76.88,10.12 77.4,4.27 Z"
                        />
                      </g>
                      <g>
                        <polygon
                          className="colored"
                          points="52.66 12.82 55.93 12.82 57.78 9.88 54.51 9.88"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M35.94,19.55 C35.3618125,20.566518 34.895746,21.6428298 34.55,22.76 C33.67,25.76 34.86,26.43 35.61,26.66 C37.88,27.31 40.61,24.08 40.61,24.08 C40.54,25.08 40.34,25.94 41.43,26.61 C42.444959,26.8280091 43.5037523,26.5660776 44.3,25.9 C47.16,23.9 49.46,20.84 51.3,18.17 L50.11,18.17 C50.11,18.17 47.19,22.31 45.29,23.17 C45.29,23.17 44.95,23.34 44.75,23.17 C44.55,23 44.6,22.54 44.75,22.24 L52.05,9.81 L48.61,9.81 L48.2,10.45 C48.2,10.45 48.13,10.33 48.09,10.28 C45.95,7.38 41.09,11.83 37.48,17 C36.9189915,17.8202798 36.4048367,18.67164 35.94,19.55 Z M42.63,19.94 C42.63,19.94 42.11,20.72 42.11,20.72 C41.4625599,21.825986 40.543558,22.7484299 39.44,23.4 C39.2275224,23.4691287 38.9959265,23.4474166 38.8,23.34 C38.5827558,23.200212 38.4689116,22.945044 38.51,22.69 C38.58,21.85 39.51,19.28 42.15,15.69 C42.82,14.78 44.77,12.35 45.24,11.93 C46.84,10.56 47.48,11.16 47.54,11.59 C46.05,14.24 44.28,17.24 42.63,19.94 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M24.74,17.26 C25.3240586,17.1566543 25.9016814,17.019761 26.47,16.85 C26.47,16.85 24,21 24.21,23.07 C24.29,23.7 24.21,25.99 26.5,26.68 C29.5,27.18 31.96,24.87 34.1,22.82 C34.1,22.82 34.47,22.48 34.67,22.28 L37.48,17.07 C36.038882,19.1959455 34.361516,21.1517542 32.48,22.9 C32.48,22.9 29.74,25.36 28.57,23.59 C28.2194153,22.7829713 28.2014474,21.8702006 28.52,21.05 C29.7583704,17.4147293 31.96407,14.1856957 34.9,11.71 C35.4227978,11.1861125 36.1921725,10.9937688 36.9,11.21 C37.2779691,11.4780759 37.3674595,12.0015945 37.1,12.38 C36.5339794,12.3359274 35.9774746,12.5446167 35.58,12.95 C34.8638168,13.5051453 34.5423361,14.4303824 34.76,15.31 C35.99,17.03 38.45,13.63 38.33,11.55 C38.2941662,10.8174123 37.9019498,10.1487767 37.28,9.76 C36.2790097,9.29038479 35.1209903,9.29038479 34.12,9.76 C32.5207345,10.5628364 31.088651,11.6623508 29.9,13 C28.52,14.5 26.15,16.16 25.41,16 C25.2361729,16.2736645 25.0028396,16.7203312 24.71,17.34 L24.74,17.26 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M25.55,9.77 C23.48,8.44 19.32,11 16,15.35 C12.95,19.26 11.64,23.81 13.07,25.91 C15.2,28.38 19.15,24.78 20.83,22.86 L21.04,22.63 C22.1361323,21.4001613 23.1013288,20.0596107 23.92,18.63 L24.74,17.3 L25.41,15.97 C25.65,15.3 27.65,11.28 25.55,9.77 Z M23.41,17.41 L21.91,19.81 C21.0155685,21.170934 19.8389801,22.3236496 18.46,23.19 C18.05,23.33 17.46,23.42 17.17,23.05 C16.55,22.32 16.87,21.3 17.17,20.48 L17.27,20.19 C18.0575497,18.2648069 19.0965818,16.4523853 20.36,14.8 L20.42,14.8 C21.1061231,15.95285 22.2267517,16.7816107 23.53,17.1 C23.5150327,17.1485671 23.4750327,17.2519004 23.41,17.41 Z M24.83,14.47 C24.83,14.47 24.17,15.97 24.17,15.97 C24.17,15.97 23.92,15.97 23.75,15.97 L23.45,15.92 C22.6071624,15.7181398 21.9162926,15.1168963 21.6,14.31 C21.3,12.9 22.53,11.8 23.07,11.4 C23.5805976,10.9962798 24.2792431,10.926025 24.86,11.22 C25.1402732,11.5667412 25.282708,12.0047283 25.26,12.45 C25.224558,13.1418579 25.0794153,13.8236909 24.83,14.47 Z"
                        />
                      </g>
                      <g>
                        <path
                          className="colored"
                          d="M42.86,31.53 C38.8,28.97 33.3,28.53 24.42,30.93 C15,33.12 11.8,34.51 7.66,31.71 C6.06,30.33 5.49,28.11 5.92,24.91 C6.92,19.7 9.58,14.68 14.32,9.12 C17,6.23 19.43,3.74 22.67,2.74 C25.16,2.12 24.93,4.03 24.67,4.31 C24.2267161,4.29934141 23.7885199,4.40630269 23.4,4.62 C22.6882227,5.13962789 22.2188228,5.92677537 22.1,6.8 C22.03,8.49 23.82,8.14 24.59,7.21 C25.36,6.28 26.64,4.21 25.68,2.29 C25.2274971,1.59650998 24.4992572,1.13043647 23.68,1.01 C20.68,0.85 17.94,2.24 15.39,3.77 C9.89966001,7.45488467 5.54093702,12.5925693 2.8,18.61 C1.34,22.1 2.22044605e-15,27.08 2,31.14 C3.53,33.96 6.7,35.45 10.49,35.14 C13.1862387,34.7579933 15.8575578,34.2170512 18.49,33.52 C20.65,33.01 31.7,29.28 35.33,35.77 C36.2307332,34.2994966 37.8356004,33.4079038 39.56,33.42 C42.6592513,33.2947014 45.712363,34.2021931 48.24,36 C46.6965225,34.2326247 44.8802383,32.7235558 42.86,31.53 Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="IndexLogos-show-more-wrapper"
              data-scroll=""
              data-scroll-offset={50}
            >
              <a href="/clients/">
                <div className="IndexLogos-show-more">
                  <span style={{ willChange: "opacity, transform" }}>
                    View all clients
                  </span>
                </div>
              </a>
            </div>
          </section> */}
          <section className="ProjectsList" data-theme="light">
            <div className="ProjectsList-wrapper">
              <div
                className="ProjectsItem"
                data-order={0}
                data-shape="rect"
                data-video="https://s3.amazonaws.com/clay.global/static/img/projects/google.mp4"
                data-video-min="https://s3.amazonaws.com/clay.global/static/img/projects/google-min.mp4"
                data-url="https://atap.google.com/jacquard/"
                data-scroll=""
                data-scroll-offset={0}
              >
                <a
                  href="https://atap.google.com/jacquard/"
                  target="_blank"
                  rel="nofollow"
                >
                  {" "}
                  <div className="ProjectsItem-paralaxWrapper">
                    <div
                      className="ProjectsItem-innerWrapper"
                      style={{ top: 149 }}
                    >
                      <div className="ProjectsItem-imageWrapper">
                        <div className="ProjectsItem-cursor" data-tp="visit">
                          <div className="ProjectsItem-cursor-inner">
                            Visit website
                          </div>
                        </div>
                        <div className="ProjectsItem-shadowWrapper">
                          <canvas
                            style={{
                              filter: "blur(22px)",
                              marginTop: "2%",
                            }}
                            width={0}
                            height={0}
                          />
                        </div>
                        <div
                          className="ProjectsItem-imageClipper"
                          data-scroll=""
                          data-scroll-offset={20}
                        >
                          <div className="ProjectsItem-videoWrapper">
                            <video
                              muted=""
                              playsInline=""
                              crossOrigin=""
                              loop=""
                              preload="auto"
                              src="https://s3.amazonaws.com/clay.global/static/img/projects/google.mp4"
                              data-src="https://s3.amazonaws.com/clay.global/static/img/projects/google.mp4"
                              className="ProjectsItem-video"
                            />
                          </div>
                          <img
                            className="ProjectsItem-cover"
                            data-src="https://s3.amazonaws.com/clay.global/static/img/projects/google.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ProjectsItem-texts">
                          <div
                            className="ProjectsItem-textsItem"
                            data-type="text"
                            data-positionv="top"
                            data-positionh="left"
                            data-align="left"
                            data-start={1533}
                            data-end={2960}
                            data-color="dark"
                            data-show="smooth"
                            data-hide="instant"
                          >
                            <p>User experience</p>
                            <p>design for Project</p>
                            <p>Jacquard</p>
                          </div>
                        </div>
                        <div
                          className="ProjectsItem-coming"
                          data-timeline='[{"color": "dark", "end": 2960, "start": 0}, {"color": "light", "end": 5260, "start": 2960}, {"color": "dark", "end": 99999, "start": 5260}]'
                          data-color="dark"
                        >
                          Visit website
                        </div>
                      </div>
                      <div
                        className="ProjectsItem-title"
                        data-scroll=""
                        data-scroll-offset={-10}
                      >
                        Google
                      </div>
                      <div
                        className="ProjectsItem-description"
                        data-scroll=""
                        data-scroll-offset={-10}
                      ></div>
                    </div>
                  </div>
                </a>{" "}
              </div>
              <div
                className="ProjectsItem"
                data-order={1}
                data-shape="square"
                data-video="https://s3.amazonaws.com/clay.global/static/img/projects/facebook.mp4"
                data-video-min="https://s3.amazonaws.com/clay.global/static/img/projects/facebook-min.mp4"
                data-url="https://Terragraph.com"
                data-scroll=""
                data-scroll-offset={0}
              >
                <a href="https://Terragraph.com" target="_blank" rel="nofollow">
                  {" "}
                  <div className="ProjectsItem-paralaxWrapper">
                    <div
                      className="ProjectsItem-innerWrapper"
                      style={{ top: 85 }}
                    >
                      <div className="ProjectsItem-imageWrapper">
                        <div className="ProjectsItem-cursor" data-tp="visit">
                          <div className="ProjectsItem-cursor-inner">
                            Visit website
                          </div>
                        </div>
                        <div className="ProjectsItem-shadowWrapper">
                          <canvas
                            style={{
                              filter: "blur(22px)",
                              marginTop: "2%",
                            }}
                            width={0}
                            height={0}
                          />
                        </div>
                        <div
                          className="ProjectsItem-imageClipper"
                          data-scroll=""
                          data-scroll-offset={20}
                        >
                          <div className="ProjectsItem-videoWrapper">
                            <video
                              muted=""
                              playsInline=""
                              crossOrigin=""
                              loop=""
                              preload="auto"
                              src="https://s3.amazonaws.com/clay.global/static/img/projects/facebook.mp4"
                              data-src="https://s3.amazonaws.com/clay.global/static/img/projects/facebook.mp4"
                              className="ProjectsItem-video"
                            />
                          </div>
                          <img
                            className="ProjectsItem-cover"
                            data-src="https://s3.amazonaws.com/clay.global/static/img/projects/facebook.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ProjectsItem-texts">
                          <div
                            className="ProjectsItem-textsItem"
                            data-type="text"
                            data-positionv="center"
                            data-positionh="left"
                            data-align="left"
                            data-start={0}
                            data-end={2293}
                            data-color="light"
                            data-show="smooth"
                            data-hide="smooth"
                          >
                            <p>Website for</p>
                            <p>Facebook’s new</p>
                            <p>internet</p>
                            <p>technology</p>
                          </div>
                        </div>
                        <div
                          className="ProjectsItem-coming"
                          data-timeline='[{"color": "light", "end": 2866, "start": 0}, {"color": "dark", "end": 20050, "start": 2866}, {"color": "light", "end": 20533, "start": 20050}]'
                          data-color="light"
                        >
                          Visit website
                        </div>
                      </div>
                      <div
                        className="ProjectsItem-title"
                        data-scroll=""
                        data-scroll-offset={-10}
                      >
                        Facebook
                      </div>
                      <div
                        className="ProjectsItem-description"
                        data-scroll=""
                        data-scroll-offset={-10}
                      >
                        Website, Marketing, B2B&nbsp;
                      </div>
                    </div>
                  </div>
                </a>{" "}
              </div>
              <div
                className="ProjectsItem"
                data-order={0}
                data-shape="square"
                data-video="https://s3.amazonaws.com/clay.global/static/img/projects/slack.mp4"
                data-video-min="https://s3.amazonaws.com/clay.global/static/img/projects/slack-min.mp4"
                data-url="https://slack.com"
                data-scroll=""
                data-scroll-offset={0}
              >
                <a href="https://slack.com" target="_blank" rel="nofollow">
                  {" "}
                  <div className="ProjectsItem-paralaxWrapper">
                    <div
                      className="ProjectsItem-innerWrapper"
                      style={{ top: 185 }}
                    >
                      <div className="ProjectsItem-imageWrapper">
                        <div className="ProjectsItem-cursor" data-tp="visit">
                          <div className="ProjectsItem-cursor-inner">
                            Visit website
                          </div>
                        </div>
                        <div className="ProjectsItem-shadowWrapper">
                          <canvas
                            style={{
                              filter: "blur(22px)",
                              marginTop: "2%",
                            }}
                            width={0}
                            height={0}
                          />
                        </div>
                        <div
                          className="ProjectsItem-imageClipper"
                          data-scroll=""
                          data-scroll-offset={20}
                        >
                          <div className="ProjectsItem-videoWrapper">
                            <video
                              muted=""
                              playsInline=""
                              crossOrigin=""
                              loop=""
                              preload="auto"
                              src="https://s3.amazonaws.com/clay.global/static/img/projects/slack.mp4"
                              data-src="https://s3.amazonaws.com/clay.global/static/img/projects/slack.mp4"
                              className="ProjectsItem-video"
                            />
                          </div>
                          <img
                            className="ProjectsItem-cover"
                            data-src="https://s3.amazonaws.com/clay.global/static/img/projects/slack.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ProjectsItem-texts">
                          <div
                            className="ProjectsItem-textsItem"
                            data-type="text"
                            data-positionv="top"
                            data-positionh="left"
                            data-align="left"
                            data-start={1100}
                            data-end={3310}
                            data-color="light"
                            data-show="smooth"
                            data-hide="instant"
                          >
                            <p>Ongoing</p>
                            <p>collaboration</p>
                            <p>with Slack's</p>
                            <p>marketing team</p>
                          </div>
                        </div>
                        <div
                          className="ProjectsItem-coming"
                          data-timeline='[{"color": "dark", "end": 1126, "start": 0}, {"color": "light", "end": 4543, "start": 1126}, {"color": "dark", "end": 5793, "start": 4543}, {"color": "light", "end": 7210, "start": 5793}, {"color": "dark", "end": 99999, "start": 7210}]'
                          data-color="dark"
                        >
                          Visit website
                        </div>
                      </div>
                      <div
                        className="ProjectsItem-title"
                        data-scroll=""
                        data-scroll-offset={-10}
                      >
                        Slack
                      </div>
                      <div
                        className="ProjectsItem-description"
                        data-scroll=""
                        data-scroll-offset={-10}
                      ></div>
                    </div>
                  </div>
                </a>{" "}
              </div>
              <div
                className="ProjectsItem"
                data-order={1}
                data-shape="rect"
                data-video="https://s3.amazonaws.com/clay.global/static/img/projects/joe.mp4"
                data-video-min="https://s3.amazonaws.com/clay.global/static/img/projects/joe-min.mp4"
                data-url="https://www.joejuice.com/app"
                data-scroll=""
                data-scroll-offset={0}
              >
                <a
                  href="https://www.joejuice.com/app"
                  target="_blank"
                  rel="nofollow"
                >
                  {" "}
                  <div className="ProjectsItem-paralaxWrapper">
                    <div
                      className="ProjectsItem-innerWrapper"
                      style={{ top: 74 }}
                    >
                      <div className="ProjectsItem-imageWrapper">
                        <div className="ProjectsItem-cursor" data-tp="visit">
                          <div className="ProjectsItem-cursor-inner">
                            Get the app
                          </div>
                        </div>
                        <div className="ProjectsItem-shadowWrapper">
                          <canvas
                            style={{
                              filter: "blur(22px)",
                              marginTop: "2%",
                            }}
                            width={0}
                            height={0}
                          />
                        </div>
                        <div
                          className="ProjectsItem-imageClipper"
                          data-scroll=""
                          data-scroll-offset={20}
                        >
                          <div className="ProjectsItem-videoWrapper">
                            <video
                              muted=""
                              playsInline=""
                              crossOrigin=""
                              loop=""
                              preload="auto"
                              src="https://s3.amazonaws.com/clay.global/static/img/projects/joe.mp4"
                              data-src="https://s3.amazonaws.com/clay.global/static/img/projects/joe.mp4"
                              className="ProjectsItem-video"
                            />
                          </div>
                          <img
                            className="ProjectsItem-cover"
                            data-src="https://s3.amazonaws.com/clay.global/static/img/projects/joe.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ProjectsItem-texts">
                          <div
                            className="ProjectsItem-textsItem"
                            data-type="text"
                            data-positionv="top"
                            data-positionh="left"
                            data-align="left"
                            data-start={3516}
                            data-end={5650}
                            data-color="dark"
                            data-show="smooth"
                            data-hide="smooth"
                          >
                            <p>A new app and</p>
                            <p>visual identity</p>
                            <p>for a chain of</p>
                            <p>coffee shops and</p>
                            <p>juice bars</p>
                          </div>
                        </div>
                        <div
                          className="ProjectsItem-coming"
                          data-timeline='[{"color": "dark", "end": 99999, "start": 0}]'
                          data-color="dark"
                        >
                          Get the app
                        </div>
                      </div>
                      <div
                        className="ProjectsItem-title"
                        data-scroll=""
                        data-scroll-offset={-10}
                      >
                        Joe &amp; the Juice
                      </div>
                      <div
                        className="ProjectsItem-description"
                        data-scroll=""
                        data-scroll-offset={-10}
                      ></div>
                    </div>
                  </div>
                </a>{" "}
              </div>
              <div
                className="ProjectsItem"
                data-order={0}
                data-shape="rect"
                data-video="https://s3.amazonaws.com/clay.global/static/img/projects/coca-cola.mp4"
                data-video-min="https://s3.amazonaws.com/clay.global/static/img/projects/coca-cola-min.mp4"
                data-scroll=""
                data-scroll-offset={0}
              >
                <div className="ProjectsItem-paralaxWrapper">
                  <div
                    className="ProjectsItem-innerWrapper"
                    style={{ top: 149 }}
                  >
                    <div className="ProjectsItem-imageWrapper">
                      <div className="ProjectsItem-cursor" data-tp="coming">
                        <div className="ProjectsItem-cursor-inner">
                          Coming soon
                        </div>
                      </div>
                      <div className="ProjectsItem-shadowWrapper">
                        <canvas
                          style={{
                            filter: "blur(22px)",
                            marginTop: "2%",
                          }}
                          width={0}
                          height={0}
                        />
                      </div>
                      <div
                        className="ProjectsItem-imageClipper"
                        data-scroll=""
                        data-scroll-offset={20}
                      >
                        <div className="ProjectsItem-videoWrapper">
                          <video
                            muted=""
                            playsInline=""
                            crossOrigin=""
                            loop=""
                            preload="auto"
                            src="https://s3.amazonaws.com/clay.global/static/img/projects/coca-cola.mp4"
                            data-src="https://s3.amazonaws.com/clay.global/static/img/projects/coca-cola.mp4"
                            className="ProjectsItem-video"
                          />
                        </div>
                        <img
                          className="ProjectsItem-cover"
                          data-src="https://s3.amazonaws.com/clay.global/static/img/projects/coca-cola.jpg"
                          alt=""
                        />

                        <div className="ProjectsItem-imageClipper-right" />
                        <div className="ProjectsItem-imageClipper-top" />
                        <div className="ProjectsItem-imageClipper-bottom" />
                      </div>
                      <div className="ProjectsItem-texts">
                        <div
                          className="ProjectsItem-textsItem"
                          data-type="text"
                          data-positionv="top"
                          data-positionh="left"
                          data-align="left"
                          data-start={0}
                          data-end={1980}
                          data-color="dark"
                          data-show="smooth"
                          data-hide="instant"
                        >
                          <p>Customer loyalty</p>
                          <p>app for Coca-Cola</p>
                          <p>Mexico</p>
                        </div>
                      </div>
                      <div
                        className="ProjectsItem-coming"
                        data-timeline='[{"color": "dark", "end": 99999, "start": 0}]'
                        data-color="dark"
                      >
                        Coming soon
                      </div>
                    </div>
                    <div
                      className="ProjectsItem-title"
                      data-scroll=""
                      data-scroll-offset={-10}
                    >
                      Coca-Cola
                    </div>
                    <div
                      className="ProjectsItem-description"
                      data-scroll=""
                      data-scroll-offset={-10}
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className="ProjectsItem"
                data-order={1}
                data-shape="square"
                data-video="https://s3.amazonaws.com/clay.global/static/img/projects/zenefits.mp4"
                data-video-min="https://s3.amazonaws.com/clay.global/static/img/projects/zenefits-min.mp4"
                data-url="https://www.zenefits.com/"
                data-scroll=""
                data-scroll-offset={0}
              >
                <a
                  href="https://www.zenefits.com/"
                  target="_blank"
                  rel="nofollow"
                >
                  {" "}
                  <div className="ProjectsItem-paralaxWrapper">
                    <div
                      className="ProjectsItem-innerWrapper"
                      style={{ top: 85 }}
                    >
                      <div className="ProjectsItem-imageWrapper">
                        <div className="ProjectsItem-cursor" data-tp="visit">
                          <div className="ProjectsItem-cursor-inner">
                            Visit website
                          </div>
                        </div>
                        <div className="ProjectsItem-shadowWrapper">
                          <canvas
                            style={{
                              filter: "blur(22px)",
                              marginTop: "2%",
                            }}
                            width={0}
                            height={0}
                          />
                        </div>
                        <div
                          className="ProjectsItem-imageClipper"
                          data-scroll=""
                          data-scroll-offset={20}
                        >
                          <div className="ProjectsItem-videoWrapper">
                            <video
                              muted=""
                              playsInline=""
                              crossOrigin=""
                              loop=""
                              preload="auto"
                              src="https://s3.amazonaws.com/clay.global/static/img/projects/zenefits.mp4"
                              data-src="https://s3.amazonaws.com/clay.global/static/img/projects/zenefits.mp4"
                              className="ProjectsItem-video"
                            />
                          </div>
                          <img
                            className="ProjectsItem-cover"
                            data-src="https://s3.amazonaws.com/clay.global/static/img/projects/zenefits.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ProjectsItem-texts">
                          <div
                            className="ProjectsItem-textsItem"
                            data-type="text"
                            data-positionv="top"
                            data-positionh="left"
                            data-align="left"
                            data-start={7200}
                            data-end={8216}
                            data-color="dark"
                            data-show="smooth"
                            data-hide="smooth"
                          >
                            <p>A new website</p>
                            <p>and visual</p>
                            <p>identity</p>
                          </div>
                        </div>
                        <div
                          className="ProjectsItem-coming"
                          data-timeline='[{"color": "dark", "end": 10, "start": 0}, {"color": "light", "end": 1400, "start": 10}, {"color": "dark", "end": 3400, "start": 1400}, {"color": "light", "end": 6033, "start": 3400}, {"color": "dark", "end": 14633, "start": 6033}, {"color": "light", "end": 18966, "start": 14633}, {"color": "dark", "end": 99999, "start": 18966}]'
                          data-color="dark"
                        >
                          Visit website
                        </div>
                      </div>
                      <div
                        className="ProjectsItem-title"
                        data-scroll=""
                        data-scroll-offset={-10}
                      >
                        Zenefits
                      </div>
                      <div
                        className="ProjectsItem-description"
                        data-scroll=""
                        data-scroll-offset={-10}
                      ></div>
                    </div>
                  </div>
                </a>{" "}
              </div>
              <div
                className="ProjectsItem"
                data-order={0}
                data-shape="square"
                data-video="https://s3.amazonaws.com/clay.global/static/img/projects/moneylion.mp4"
                data-video-min="https://s3.amazonaws.com/clay.global/static/img/projects/moneylion-min.mp4"
                data-url="https://moneylion.com"
                data-scroll=""
                data-scroll-offset={0}
              >
                <a href="https://moneylion.com" target="_blank" rel="nofollow">
                  {" "}
                  <div className="ProjectsItem-paralaxWrapper">
                    <div
                      className="ProjectsItem-innerWrapper"
                      style={{ top: 185 }}
                    >
                      <div className="ProjectsItem-imageWrapper">
                        <div className="ProjectsItem-cursor" data-tp="visit">
                          <div className="ProjectsItem-cursor-inner">
                            Visit website
                          </div>
                        </div>
                        <div className="ProjectsItem-shadowWrapper">
                          <canvas
                            style={{
                              filter: "blur(22px)",
                              marginTop: "2%",
                            }}
                            width={0}
                            height={0}
                          />
                        </div>
                        <div
                          className="ProjectsItem-imageClipper"
                          data-scroll=""
                          data-scroll-offset={20}
                        >
                          <div className="ProjectsItem-videoWrapper">
                            <video
                              autoPlay
                              muted
                              playsInline=""
                              crossOrigin=""
                              loop
                              preload="auto"
                              src="https://s3.amazonaws.com/clay.global/static/img/projects/moneylion.mp4"
                              data-src="https://s3.amazonaws.com/clay.global/static/img/projects/moneylion.mp4"
                              className="ProjectsItem-video"
                            />
                          </div>
                          <img
                            className="ProjectsItem-cover"
                            data-src="https://s3.amazonaws.com/clay.global/static/img/projects/moneylion.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ProjectsItem-texts">
                          <div
                            className="ProjectsItem-textsItem"
                            data-type="text"
                            data-positionv="top"
                            data-positionh="left"
                            data-align="left"
                            data-start={5050}
                            data-end={8860}
                            data-color="dark"
                            data-show="smooth"
                            data-hide="smooth"
                          >
                            <p>All-in-one</p>
                            <p>financial platform</p>
                          </div>
                          <div
                            className="ProjectsItem-textsItem"
                            data-type="text"
                            data-positionv="bottom"
                            data-positionh="left"
                            data-align="left"
                            data-start={7150}
                            data-end={9000}
                            data-color="dark"
                            data-show="smooth"
                            data-hide="smooth"
                          >
                            <p>$67.5M raised</p>
                          </div>
                        </div>
                        <div
                          className="ProjectsItem-coming"
                          data-timeline='[{"color": "light", "end": 900, "start": 0}, {"color": "dark", "end": 99999, "start": 900}]'
                          data-color="light"
                        >
                          Visit website
                        </div>
                      </div>
                      <div
                        className="ProjectsItem-title"
                        data-scroll=""
                        data-scroll-offset={-10}
                      >
                        MoneyLion
                      </div>
                      <div
                        className="ProjectsItem-description"
                        data-scroll=""
                        data-scroll-offset={-10}
                      ></div>
                    </div>
                  </div>
                </a>{" "}
              </div>
              <div
                className="ProjectsItem"
                data-order={1}
                data-shape="rect"
                data-video="https://s3.amazonaws.com/clay.global/static/img/projects/enterprise.mp4"
                data-video-min="https://s3.amazonaws.com/clay.global/static/img/projects/enterprise-min.mp4"
                data-scroll=""
                data-scroll-offset={0}
              >
                <div className="ProjectsItem-paralaxWrapper">
                  <div
                    className="ProjectsItem-innerWrapper"
                    style={{ top: 74 }}
                  >
                    <div className="ProjectsItem-imageWrapper">
                      <div className="ProjectsItem-cursor" data-tp="coming">
                        <div className="ProjectsItem-cursor-inner">
                          Coming soon
                        </div>
                      </div>
                      <div className="ProjectsItem-shadowWrapper">
                        <canvas
                          style={{
                            filter: "blur(22px)",
                            marginTop: "2%",
                          }}
                          width={0}
                          height={0}
                        />
                      </div>
                      <div
                        className="ProjectsItem-imageClipper"
                        data-scroll=""
                        data-scroll-offset={20}
                      >
                        <div className="ProjectsItem-videoWrapper">
                          <video
                            muted=""
                            playsInline=""
                            crossOrigin=""
                            loop=""
                            preload="auto"
                            src="https://s3.amazonaws.com/clay.global/static/img/projects/enterprise.mp4"
                            data-src="https://s3.amazonaws.com/clay.global/static/img/projects/enterprise.mp4"
                            className="ProjectsItem-video"
                          />
                        </div>
                        <img
                          className="ProjectsItem-cover"
                          data-src="https://s3.amazonaws.com/clay.global/static/img/projects/enterprise.jpg"
                          alt=""
                        />

                        <div className="ProjectsItem-imageClipper-right" />
                        <div className="ProjectsItem-imageClipper-top" />
                        <div className="ProjectsItem-imageClipper-bottom" />
                      </div>
                      <div className="ProjectsItem-texts">
                        <div
                          className="ProjectsItem-textsItem"
                          data-type="text"
                          data-positionv="top"
                          data-positionh="left"
                          data-align="left"
                          data-start={1233}
                          data-end={3350}
                          data-color="dark"
                          data-show="smooth"
                          data-hide="instant"
                        >
                          <p>We design</p>
                          <p>enterprise</p>
                          <p>software that</p>
                          <p>doesn't suck</p>
                        </div>
                      </div>
                      <div
                        className="ProjectsItem-coming"
                        data-timeline='[{"color": "light", "end": 1166, "start": 0}, {"color": "dark", "end": 3333, "start": 1166}, {"color": "light", "end": 5200, "start": 3333}, {"color": "dark", "end": 8616, "start": 5200}, {"color": "light", "end": 12900, "start": 8616}, {"color": "dark", "end": 18183, "start": 12900}, {"color": "light", "end": 99999, "start": 18183}]'
                        data-color="light"
                      >
                        Coming soon
                      </div>
                    </div>
                    <div
                      className="ProjectsItem-title"
                      data-scroll=""
                      data-scroll-offset={-10}
                    >
                      Enterprise UX
                    </div>
                    <div
                      className="ProjectsItem-description"
                      data-scroll=""
                      data-scroll-offset={-10}
                    ></div>
                  </div>
                </div>
              </div>
              <a href="/work/" className="ProjectsList-more">
                See more work
              </a>
            </div>
          </section>
          <section className="IndexAbout" data-theme="light">
            <div className="IndexAbout-wrapper" style={{ width: 1350 }}>
              <div
                className="IndexAbout-padder"
                style={{ padding: "40px 0px" }}
              >
                <div className="IndexAbout-inner">
                  <div className="IndexAbout-text-wrapper">
                    <div>
                      <p
                        className="IndexAbout-text"
                        data-scroll=""
                        data-scroll-offset={50}
                      >
                        Wij zijn een enthousiast team van creatives,
                        analytics-nerds, en enthousiastelingenklaar om jouw
                        bedrijf te laten groeien met onze unieke aanpak. Onze
                        mix van storytelling en datagedreven inzichten zorgt
                        ervoor dat jouw boodschap echt binnenkomt bij jouw
                        publiek.
                      </p>
                    </div>
                    <div className="IndexAbout-numbers-wrapper">
                      <div
                        className="IndexAbout-numbers number--32"
                        data-scroll=""
                        data-scroll-offset={50}
                        style={{
                          willChange: "opacity, transform",
                          opacity: "1",
                          transform: "matrix(1, 0, 0, 1, 0, 30)",
                        }}
                      >
                        <div className="IndexAbout-number">
                          <span data-start={40} data-end={60}>
                            500K
                          </span>
                          +
                        </div>
                        <span className="IndexAbout-description">
                          Video weergaven
                        </span>
                      </div>
                      <div
                        className="IndexAbout-numbers"
                        data-scroll=""
                        data-scroll-offset={50}
                        style={{
                          willChange: "opacity, transform",
                          opacity: "1",
                          transform: "matrix(1, 0, 0, 1, 0, 30)",
                        }}
                      >
                        <div className="IndexAbout-number">
                          <span data-start={5} data-end={12}>
                            100
                          </span>
                        </div>
                        <span className="IndexAbout-description">
                          Social Media posts
                          <br />
                          geproduceerd
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="IndexAbout-more-wrapper"
                    style={{
                      willChange: "opacity, transform",
                      opacity: "1",
                      transform: "matrix(1, 0, 0, 1, 0, 30)",
                    }}
                  >
                    <a className="IndexAbout-more" href="/about/">
                      Over WRAPPED.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="AboutGallery AboutGallery-PageIndex"
            data-theme="light"
          >
            <div className="AboutGallery-content">
              <div
                className="AboutGallery-shift-wrapper"
                data-scroll
                data-scroll-offset={40}
                style={{
                  transform: `translate3d(${number}.094px, 0px, 0px)`,
                }}
              >
                <div className="AboutGallery-img-wrapper">
                  {/* <Slider {...settings}> */}
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g1.jpg"
                      alt="Clay San Francisco office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g1%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g1%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g1.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g2.jpg"
                      alt="Clay UI UX agency San Francisco office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g2%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g2%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g2.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g3.jpg"
                      alt="UI/UX designers from Clay"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g3%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g3%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g3.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g4.jpg"
                      alt="Clay UX design office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g4%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g4%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g4.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g5.jpg"
                      alt="UX designers brainstorming"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g5%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g5%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g5.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g6.jpg"
                      alt="San Francisco UX design office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g6%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g6%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g6.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g7.jpg"
                      alt="UI/UX design director from Clay"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g7%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g7%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g7.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g8.jpg"
                      alt="Dribbble pink ball"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g8%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g8%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g8.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g1.jpg"
                      alt="Clay San Francisco office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g1%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g1%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g1.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g2.jpg"
                      alt="Clay UI UX agency San Francisco office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g2%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g2%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g2.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g3.jpg"
                      alt="UI/UX designers from Clay"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g3%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g3%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g3.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g4.jpg"
                      alt="Clay UX design office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g4%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g4%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g4.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g5.jpg"
                      alt="UX designers brainstorming"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g5%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g5%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g5.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g6.jpg"
                      alt="San Francisco UX design office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g6%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g6%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g6.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g7.jpg"
                      alt="UI/UX design director from Clay"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g7%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g7%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g7.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g8.jpg"
                      alt="Dribbble pink ball"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g8%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g8%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g8.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g1.jpg"
                      alt="Clay San Francisco office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g1%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g1%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g1.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g2.jpg"
                      alt="Clay UI UX agency San Francisco office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g2%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g2%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g2.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g3.jpg"
                      alt="UI/UX designers from Clay"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g3%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g3%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g3.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g4.jpg"
                      alt="Clay UX design office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g4%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g4%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g4.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g5.jpg"
                      alt="UX designers brainstorming"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g5%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g5%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g5.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g6.jpg"
                      alt="San Francisco UX design office"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g6%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g6%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g6.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g7.jpg"
                      alt="UI/UX design director from Clay"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g7%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g7%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g7.jpg"
                    />
                  </div>
                  <div className="AboutGallery-single-img-wrapper AboutGallery-single-img-wrapper--cloned">
                    <img
                      className="AboutGallery-single-img "
                      data-lazy
                      data-src="https://s3.amazonaws.com/clay.global/static/img/about/g8.jpg"
                      alt="Dribbble pink ball"
                      data-srcset="https://s3.amazonaws.com/clay.global/static/img/about/g8%402x.jpg 2x"
                      srcSet="https://s3.amazonaws.com/clay.global/static/img/about/g8%402x.jpg 2x"
                      src="https://s3.amazonaws.com/clay.global/static/img/about/g8.jpg"
                    />
                  </div>{" "}
                  {/* </Slider> */}
                </div>
              </div>
              <div className="AboutGallery-right-index-hover-area" />
              <div className="AboutGallery-left-index-hover-area" />
            </div>
          </section>
          <section className="IndexNews" data-theme="light">
            <div className="IndexNews-wrapper">
              <div className="IndexNews-title">
                <p
                  data-scroll=""
                  data-scroll-offset={50}
                  style={{ willChange: "opacity, transform" }}
                >
                  Social Media Nieuws
                </p>
              </div>
              <ul>
                <li data-scroll="" data-scroll-offset={50}>
                  <div className="IndexNews-date">
                    <span
                      style={{
                        willChange: "opacity, transform",
                        opacity: "1",
                        transform: "matrix(1, 0, 0, 1, 0, 30)",
                      }}
                    >
                      23 Maart
                    </span>
                  </div>
                  <div className="IndexNews-link">
                    <a
                      target="_self"
                      href="/news/ux-design-agency-deliverables/"
                    >
                      <span className="IndexNews-link-inner">
                        TikTok’s toekomst blijft onzeker in Verenigde Staten
                      </span>
                      <div
                        className="IndexNews-imageContainer"
                        style={{ transform: "translateX(-8px)" }}
                      >
                        <img
                          data-src="https://s3.amazonaws.com/clay.global/static/img/news/news-min_6.jpg"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </li>
                <li data-scroll="" data-scroll-offset={50}>
                  <div className="IndexNews-date">
                    <span
                      style={{
                        willChange: "opacity, transform",
                        opacity: "1",
                        transform: "matrix(1, 0, 0, 1, 0, 30)",
                      }}
                    >
                      24 Maart
                    </span>
                  </div>
                  <div className="IndexNews-link">
                    <a
                      target="_self"
                      href="/news/how-to-organize-files-in-a-design-agency/"
                    >
                      <span className="IndexNews-link-inner">
                        Snapchat brengt tips uit om bereik te maximaliseren
                      </span>
                      <div
                        className="IndexNews-imageContainer"
                        style={{ transform: "translateX(-8px)" }}
                      >
                        <img
                          data-src="https://s3.amazonaws.com/clay.global/static/img/news/news-min_5.jpg"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </li>
                <li data-scroll="" data-scroll-offset={50}>
                  <div className="IndexNews-date">
                    <span
                      style={{
                        willChange: "opacity, transform",
                        opacity: "1",
                        transform: "matrix(1, 0, 0, 1, 0, 30)",
                      }}
                    >
                      25 Maart
                    </span>
                  </div>
                  <div className="IndexNews-link">
                    <a
                      target="_self"
                      href="/news/our-design-directors-judge-several-international-design-awards/"
                    >
                      <span className="IndexNews-link-inner">
                        AI bereikt marketing op alle vlakken: Canva
                        implementeert nieuwe plug-ins
                      </span>
                      <div
                        className="IndexNews-imageContainer"
                        style={{ transform: "translateX(-8px)" }}
                      >
                        <img
                          data-src="https://s3.amazonaws.com/clay.global/static/img/news/news-min_4.jpg"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="IndexFaq" data-theme="dark">
            <div
              className="IndexFaq-wrapper"
              itemScope=""
              itemType="https://schema.org/FAQPage"
            >
              <h2
                className="IndexFaq-text"
                data-scroll=""
                data-scroll-offset={50}
              >
                <div
                  className="IndexFaq-text-line"
                  style={{
                    willChange: "opacity, transform",
                    opacity: "1",
                    transform: "matrix(1, 0, 0, 1, 0, 30)",
                    color: "white",
                  }}
                >
                  Veelgestelde vragen
                </div>
              </h2>
              {DetailsData.map((value, index) => (
                <div
                  key={index}
                  className="IndexFaq-items"
                  data-scroll=""
                  data-scroll-offset={50}
                >
                  <div
                    className="IndexFaq-item"
                    itemProp="mainEntity"
                    itemScope=""
                    itemType="https://schema.org/Question"
                  >
                    <div
                      onClick={() => setDetailsOpen(index)}
                      className="IndexFaq-item-title -active"
                      itemProp="name"
                      style={{
                        willChange: "opacity, transform",
                        opacity: "1",
                        transform: "matrix(1, 0, 0, 1, 0, 30)",
                      }}
                    >
                      {value.Title}
                      <em />
                    </div>
                    {DetailsOpen === index && (
                      <div
                        className="IndexFaq-item-wrapper"
                        style={{
                          height: "auto",
                          display: "block",
                          willChange: "opacity, transform",
                          opacity: "1",
                          transform: "matrix(1, 0, 0, 1, 0, 30)",
                        }}
                      >
                        <div
                          className="IndexFaq-item-text"
                          itemProp="acceptedAnswer"
                          itemScope=""
                          itemType="https://schema.org/Answer"
                        >
                          <p itemProp="text">{value.subTitle}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="Section-content"></div>
      </main>
    </div>
  )
}

export default Hero
