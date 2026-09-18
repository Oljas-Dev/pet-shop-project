import styled from "styled-components";
import ContactCardLink from "../contactCardLink";

const StyledCard = styled.div`
  background: rgba(241, 243, 244, 1);
  padding: 32px;
  border-radius: 12px;
`;

const StyledTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: rgba(139, 139, 139, 1);
`;

const StyledText = styled.p`
  font-size: 40px;
  font-weight: 600;
  margin-top: 16px;
`;

const StyledLink = styled.div`
  display: flex;
  gap: 18px;

  margin-top: 16px;
`;

function ContactCard({ cardConfig }) {
  return (
    <StyledCard>
      {cardConfig.title && <StyledTitle>{cardConfig.title}</StyledTitle>}
      <StyledLink>
        {cardConfig.links &&
          cardConfig.links.map((link, i) => (
            <ContactCardLink link={link} key={i} />
          ))}
      </StyledLink>
      <StyledText>{cardConfig.text}</StyledText>
    </StyledCard>
  );
}

export default ContactCard;
