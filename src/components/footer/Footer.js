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
                            <li><a href="/inneplanter">Hjem</a></li>
                            <li><a href="./database">Planter</a></li>
                            <li><a href="/om">Om</a></li>
                            <li><a href="/logginn">Logg inn</a></li>
                            <li><a href="/registrer-deg">Registrer deg</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Tjenester</h3>
                        <ul>
                            <li><a href="./database">Tjenester</a></li>
                            <li><a href="/nyesteplante">Kunnskap</a></li>
                            <li><a href="/registrerdeg">Nye venner</a></li>
                        </ul>
                    </div>
                    <div className="footer-kontakt">
                        <h3>Kontakt</h3>
                        <ul>
                        
                                 <svg href="" width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="white"/>
                                 </svg>
                                <a href="https://www.google.com/maps/place/Hogwarts+Castle/@51.6905814,-0.42068,17z/data=!3m1!4b1!4m6!3m5!1s0x48764103e950758d:0x2b152593ceb59b52!8m2!3d51.6905814!4d-0.4181051!16s%2Fg%2F11l_dscb5l?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">
                                    Galtvort, Narnia</a>
                        
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="white"/>
                            </svg>

                                <a href="https://gmail.com">fake@fakesen.com</a>
                        
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white"/>
                            </svg>

                                <a href="https://1881.no">123-456-789</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;