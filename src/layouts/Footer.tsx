import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="md:px-42 px-5 py-7 border-t-[#F1F1F1] inset-shadow-sm mt-25 flex items-center justify-between">
      <span>© 2025 Ilman Muhammad Difa</span>
      <div className="flex justify-between">
        <a href="">
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faXTwitter} size="xl" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
