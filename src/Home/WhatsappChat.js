import { Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappChat.css'; // CSS file for styling

function WhatsappChat() {
  return (
    <div className="whatsapp">
      <Button
        href="https://api.whatsapp.com/send/?phone=917867897000&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="button whatsapp"
      >
        <FaWhatsapp />
      </Button>
    </div>
  );
}

export default WhatsappChat;
