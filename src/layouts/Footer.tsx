import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="md:px-42 px-5 py-7 border-t-[#F1F1F1] inset-shadow-sm flex items-center justify-between">
      <span>© {currentYear} Ilman Muhammad Difa</span>
      <div className="flex justify-between">
        <a href="https://www.facebook.com/ilmanmdifa/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </a>
        <a href="https://x.com/Ilman_M_D" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} size="xl" />
        </a>
        <a href="https://www.instagram.com/ilmanmdifa/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
