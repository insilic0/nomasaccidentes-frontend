import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="contacto">
                <h2>Contacto</h2>
                    <div className="data">
                        <i className="fas fa-map-marked-alt"></i>
                        <p>Paseo Ahumada 312, Of. 715</p>
                    </div>

                    <div className="data">
                        <i className="fas fa-phone"></i>
                        <p>+56990695847</p>
                    </div>

                    <div className="data">
                        <i className="fas fa-at"></i>
                        <p>contacto@empresa.cl</p>
                    </div>
            </div>

            <div className="redes">
                <h2>Redes Sociales</h2>
                <div className="data">
                    <i className="fab fa-instagram"></i>
                    <p>Instagram</p>
                </div>

                <div className="data">
                    <i className="fab fa-facebook"></i>
                    <p>Facebook</p>
                </div>

                <div className="data">
                    <i className="fab fa-twitter"></i>
                    <p>Twitter</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;


