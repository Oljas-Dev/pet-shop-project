import styled from "styled-components";
import ContactCard from "../contactCard";

import instaIcon from "./../../assets/icons/instagram.svg";
import whatsappIcon from "./../../assets/icons/whatsapp.svg";

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: 80% 15%;
  gap: 32px;
  width: 100%;
`;

function ContactCards() {
  const cardConfig = [
    {
      title: "Phone",
      text: "+49 30 915-88492",
    },
    {
      title: "Socials",
      links: [
        {
          icon: instaIcon,
          alt: "instagram icon",
          href: "#",
        },
        {
          icon: whatsappIcon,
          alt: "whatsapp icon",
          href: "#",
        },
      ],
    },
    {
      title: "Address",
      text: "Wallstraẞe 9-13, 10179 Berlin, Deutschland",
    },
    {
      title: "Working Hours",
      text: "24 hours a day",
    },
  ];
  return (
    <StyledCards>
      {cardConfig.map((card, i) => {
        return <ContactCard cardConfig={card} key={i} />;
      })}
    </StyledCards>
  );
}

export default ContactCards;
