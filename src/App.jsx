import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"
import Hero from "./component/Hero/Hero"
import "./styles.css"

export default function App() {
  return (
    <div className="App">
      <div className="light-theme" data-theme="light">
        <div className="Content" style={{ visibility: "visible" }}>
          <Header />
          <Hero />
        </div>

        <Footer />
      </div>
    </div>
  )
}
