import "../App.css"
import Nav from "./Nav"
import Footer from "./Footer"

export default function About({ setModalOpen }) {
  return (
    <div>
      <Nav />
      <Footer setModalOpen={setModalOpen} />
    </div>
  )
}
