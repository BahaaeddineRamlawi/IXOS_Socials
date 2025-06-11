import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src="/logo.png" alt="Store Logo" className="logo" />
        <h1>
          Welcome to<br></br>IXOS SHOES & BAGS
        </h1>

        <div className="links">
          <a href="https://wa.me/+96103856611" className="link">
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            WhatsApp Number
          </a>

          <a
            href="https://chat.whatsapp.com/5bBtq6iPXZNFikDBebz9II"
            className="link"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            WhatsApp Group
          </a>

          <a
            href="https://www.instagram.com/ixos_shoes_and_bags/"
            className="link"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            Instagram
          </a>

          <div className="link coming-soon">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            Website (Coming Soon)
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
