import HomeBlockImg from "components/media/phonebook_v5_b.jpg";
import {
  StyledHomeImg,
  StyledHomeText,
  StyledHomeDiv,
  StyledHomeList,
  StyledHomePhoneIcon,
  StyledHomeGlobeIcon,
  StyledHomeLockIcon,
  StyledHomeSearchIcon,
  StyledHomeAccessIcon,
  StyledHomeListItem,
  StyledLoginLink,
} from "./HomeContent.styled";

export default function HomeContent() {
  return (
    <StyledHomeDiv>
      <StyledHomeImg src={HomeBlockImg} alt="phonebook" />
      <StyledHomeText>
        <StyledHomeList>
          <StyledHomeListItem>
            <StyledHomePhoneIcon /> Unlock the Power of Connectivity with your
            Phone Book App! Looking for a seamless way to manage your contacts?
            My cutting-edge phone book application is designed to simplify your
            life and keep your contacts organized.
          </StyledHomeListItem>
          <StyledHomeListItem>
            <StyledHomeGlobeIcon /> Accessible Anywhere, Anytime: Access your
            contacts from anywhere in the world. Whether you're at home, at the
            office, or on the go, your phone book is just a tap away.
          </StyledHomeListItem>
          <StyledHomeListItem>
            <StyledHomeLockIcon /> Privacy and Security: Your personal account
            ensures that your contacts are private and secure. Rest easy knowing
            that only you have access to your valuable connections.
          </StyledHomeListItem>
          <StyledHomeListItem>
            🚀 Effortless Management: Add, edit, or delete contacts with ease. A
            user-friendly interface makes managing your phone book a breeze,
            saving you time and effort.
          </StyledHomeListItem>
          <StyledHomeListItem>
            <StyledHomeSearchIcon style={{ fontSize: 20 }} /> Quick Search: Find
            the right contact in seconds with our powerful search feature. No
            more scrolling endlessly – locate the information you need swiftly.
          </StyledHomeListItem>
          <StyledHomeListItem>
            <StyledHomeAccessIcon style={{ fontSize: 20 }} /> Try it Now –
            Hassle-Free <StyledLoginLink to="/login">Login</StyledLoginLink> :
            Explore the functionality with pre-entered login details on our
            Login page. Experience the convenience firsthand!
          </StyledHomeListItem>
        </StyledHomeList>
      </StyledHomeText>
    </StyledHomeDiv>
  );
}