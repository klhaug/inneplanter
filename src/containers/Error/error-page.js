import { useRouteError } from "react-router-dom";
import "./Error.css"
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route)
}

  return (
    <div id="error-page">
      {/* <Navbar /> */}
      <div className="error-background">
        <div className="error-content-wrapper">
          <div className="error-content-container">
            <div className="divider"></div>
            <img className="error-img" src='assets/img4.webp'></img>
            <div className="error-text-container">
              <h1>Ooops... 404</h1>
              <p>Enten har du navigert til en side/funksjon som ikke eksisterer enda, eller så har det skjedd noe grådig feil fra vår sin side. Uansett så beklager vi på det aller sterkeste. Her har du en skikkelig real <b>“tilbake”-knapp</b> som tar deg trygt tilbake til startsiden. Kom gjerne tilbake ved en senere anledning og sjekk om vi har gjort jobben vår og ryddet opp i dette. Ha en strålende dag videre!</p>
              <button onClick={() => handleButtonClick('/inneplanter')} className="error-back-button">← TILBAKE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

