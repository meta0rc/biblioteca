import { Logo } from "../logo/Logo";
import { Menu } from "../menu/Menu";
import { Container, Top } from "./style";

export const Header = () => {
  return (
    <Top>
      <Container>
        <Logo />
        <Menu />
      </Container>
    </Top>
  );
};
