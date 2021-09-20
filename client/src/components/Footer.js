import "../App.css"

export default function Footer() {

  function handleContact(evt){
    console.log(evt.target);
  }

  return (
    <div className="footer">
      <div className="footerElements">
        <a href="https://github.com/ikoreyvt"><span className="footerElement">GitHub</span></a>
        <a href="https://www.linkedin.com/in/korey-witham-756692215/"><span className="footerElement">LinkedIn</span></a>
        <span className="footerElement">Copyright</span>
        <span className="footerElement" onClick={handleContact}>Contact</span>
      </div>
    </div>
  )
}
