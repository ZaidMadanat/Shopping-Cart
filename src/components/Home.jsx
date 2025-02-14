import DisplayCard from "./DisplayCard"; 
import { HomeContainer, 
    HomeTitle, HomeParagraph, SectionTitle,CardRow
 } from "../styles/Home.Styled";


/**
 Greats user and showcases the new product selection. 
 */
export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to Zaid Mart!</HomeTitle>
      <HomeParagraph>This is your place to shop for all your needs.</HomeParagraph>
      <SectionTitle>Take a look at our brand new selection</SectionTitle>

      <CardRow>
        <DisplayCard id={1} />
        <DisplayCard id={2} />
        <DisplayCard id={3} />
      </CardRow>
    </HomeContainer>
  );
}