import { Container, Toolbar } from "@mui/material";
import Link from "UI/components/navigation/Link/Link";
import { HeaderAppaBar, HeaderLogo, ButtonsContainer } from "./Header.styled";
import RoundedButton from "UI/components/inputs/RoundedButton/RoundedButton";
const Header: React.FC = () => {
  return <HeaderDesktop />;
};

export default Header;

const HeaderDesktop: React.FC = () => {
  return (
    <HeaderAppaBar>
      <Toolbar component={Container}>
        <Link href="/">
          <HeaderLogo src="/img/logos/logo.svg" alt="e-diarista" />
        </Link>

        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <ButtonsContainer>
          <Link
            Component={RoundedButton}
            mui={{ variant: "contained", color: "primary" }}
            href="/cadastro/diarista"
          >
            Seja um(a) diarista
          </Link>
          <Link href="/login">Login</Link>
        </ButtonsContainer>
      </Toolbar>
    </HeaderAppaBar>
  );
};
