import "./ContactButton.css";

const ContactButton = ({ label, href, color, logo = null }) => {
  return (
    <a href={href} target="_blank">
      <button className={`contact-button ${color}`}>
        {logo && <img src={logo} alt={`Logo ${label}`} />}
        <p>{label}</p>
      </button>
    </a>
  );
};

export default ContactButton;