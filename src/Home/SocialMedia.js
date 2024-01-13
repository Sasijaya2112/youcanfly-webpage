import { Button } from 'react-bootstrap';
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './FloatingSocialButtons.css'; // CSS file for styling

function SocialMedia() {
  return (
    <div className="floating-social-buttons">
      <Button
        href="https://www.linkedin.com/in/youcanfly-in-a8213a288/"
        target="_blank"
        rel="noopener noreferrer"
        className="button linkedin"
      >
        <FaLinkedin />
      </Button>
      <Button
        href="https://www.instagram.com/youcanfly_puducherry/"
        target="_blank"
        rel="noopener noreferrer"
        className="button instagram"
      >
        <FaInstagram />
      </Button>
      <Button
        href="https://www.youtube.com/@you_can_fly"
        target="_blank"
        rel="noopener noreferrer"
        className="button youtube"
      >
        <FaYoutube />
      </Button>

      <Button
        href="https://www.facebook.com/ycf.puducherry"
        target="_blank"
        rel="noopener noreferrer"
        className="button facebook"
      >
        <FaFacebook />
      </Button>
      <Button
        href="https://www.twitter.com/YoucanflyInfo"
        target="_blank"
        rel="noopener noreferrer"
        className="button twitter"
      >
        <FaXTwitter />
      </Button>
    </div>
  );
}

export default SocialMedia;
