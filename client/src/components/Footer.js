import "../App.css"

export default function Footer({ setModalOpen }) {

  

  return (
    <div className="footer">
      <div className="footerElements">
        <span className="footerElement">Copyright© Korey Witham 2021</span>
        <span className="footerElement"><a href="https://github.com/ikoreyvt">GitHub</a></span>
        <span className="footerElement"><a href="https://www.linkedin.com/in/korey-witham-756692215/">LinkedIn</a></span>
        <span className="footerElement contact" onClick={() => setModalOpen(true)}>Contact</span>
      </div>
    </div>
  )
}
