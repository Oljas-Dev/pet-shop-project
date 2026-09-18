import { Link } from "react-router-dom";

function ContactCardLink({ link }) {
  return (
    <Link to={link.href}>
      <img
        src={link.icon}
        alt={link.alt}
        key={link.alt}
        width={38}
        height={38}
      />
    </Link>
  );
}

export default ContactCardLink;
