import React from "react";
import "./Footer.css";
import "./FooterMediaQueries.css"

function Footer() {
    return (
        <div className="footer-background">
            <div className="footer-wrapper">
                <div className="footer-content-container">
                    <div className="description-container">
                        <h3>Inneplanter</h3>
                        <p>"Inneplanter" er en tjeneste som kombinerer en plante-database med et engasjerende fellesskap. Brukere kan finne informasjon om innendørs planter og dele erfaringer, få tips og støtte fra andre planteentusiaster, alt for å skape et grønt og frodig hjem sammen.</p>
                    </div>
                    <div>
                        <h3>Navigasjon</h3>
                        <ul>
                            <li><a href="#hjem">Hjem</a></li>
                            <li><a href="#hjem">Planter</a></li>
                            <li><a href="#hjem">Om</a></li>
                            <li><a href="#hjem">Logg inn</a></li>
                            <li><a href="#hjem">Registrer deg</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Tjenester</h3>
                        <ul>
                            <li><a href="#database">Tjenester</a></li>
                            <li><a href="#nyesteplante">Kunnskap</a></li>
                            <li><a href="#registrerdeg">Nye venner</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Kontakt</h3>
                        <ul>
                            <li><a href="https://www.google.com/maps/place/Hogwarts+Castle/@51.6905814,-0.42068,17z/data=!3m1!4b1!4m6!3m5!1s0x48764103e950758d:0x2b152593ceb59b52!8m2!3d51.6905814!4d-0.4181051!16s%2Fg%2F11l_dscb5l?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">Galtvort, Narnia</a></li>
                            <li><a href="https://gmail.com">fake@fakesen.com</a></li>
                            <li><a href="https://1881.no">123-456-789</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;