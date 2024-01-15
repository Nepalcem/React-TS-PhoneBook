import TypedText from "./TypedText/TypedText";
import { ContentBlock } from "components/ContactLayout/ContactLayout.styled";
import HomeContent from "./HomeContent/HomeContent";

function Home() {
  return (
    <ContentBlock>
      <TypedText
        text="Welcome to the best Phonebook app in your life! :)"
        delay={100}
      />
      <HomeContent />
    </ContentBlock>
  );
}

export default Home;
