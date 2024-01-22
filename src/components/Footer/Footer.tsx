import {
  OwnerName,
  SocialElement,
  SocialUl,
  StyledFooter,
} from "./Footer.styled";
import {
  TelegramInIcon,
  LinkedInIcon,
  GitHubIcon,
  MailInIcon,
} from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <OwnerName>Michael Lykhovyd</OwnerName>
      <SocialUl>
        <SocialElement>
          <a
            href="https://www.linkedin.com/in/michael-lykhovyd/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon style={{ fontSize: 26 }} />
          </a>
        </SocialElement>
        <SocialElement>
          <a
            href="https://github.com/Nepalcem"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </SocialElement>
        <SocialElement>
          <a href="https://t.me/MarkWds" target="_blank" rel="noreferrer">
            <TelegramInIcon />
          </a>
        </SocialElement>
        <SocialElement>
          <a
            href="mailto:mark.emailtest@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MailInIcon />
          </a>
        </SocialElement>
      </SocialUl>
    </StyledFooter>
  );
}

export default Footer;