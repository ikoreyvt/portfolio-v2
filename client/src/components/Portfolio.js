import "../App.css"
import Nav from "./Nav"
import Footer from "./Footer"

export default function Portfolio({ setModalOpen }) {
  return (
    <div>
      <Nav />
      
      <Footer setModalOpen={setModalOpen} />
    </div>
  )
}
