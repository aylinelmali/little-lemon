import logowhite from "../assets/logo-white.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-dark text-light pt-4 pb-3 mt-auto">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col md-3 text-center text-md-start mb-3 mb-md-0">
                        <img src={logowhite} alt="Little Lemon" style={{ height: '80px' }}/>
                    </div>
                    <div className="col md-5 text-center text-md-start mb-3 mb-md-0">
                        <div>
                            <p className="mb-1">123 Main Street, Chicago, IL</p>
                            <p className="mb-1">Phone: (555) 123-4567</p>
                            <p className="mb-0">Email: info@littlelemon.com</p>
                        </div>
                    </div>
                    <div className="col md-4 text-center text-md-end">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-light">
                            <FontAwesomeIcon icon={faXTwitter} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;